# required packages
import datetime
import gspread
import json
import requests
from collections import OrderedDict
from googleapiclient import discovery
from oauth2client.service_account import ServiceAccountCredentials
from pytz import timezone

#constants
FIRST_DAY_OF_FIRST_WEEK = datetime.datetime(2019,12,30).astimezone(timezone("Asia/Taipei"))
AC_CONTACTS_API_STRING = "https://alphacamp92162.api-us1.com/api/3/contacts"
API_KEY_STRING = "?api_key=239b682152bc38d3b2c3dbc151b2fcd3c6842794d70ecd00451df11475583873837a0c19"
TIMEZONE = "Asia/Taipei"
API_DATE_FORMAT = "%Y-%m-%dT%H:%M:%S%z"
API_DEFAULT_PARAMETERS_ASC = "&limit=100&orders[cdate]=ASC&api_output=json"
DEFAULT_URL = AC_CONTACTS_API_STRING+API_KEY_STRING

# necessary information for the Google Drive API
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("kalyn_creds.json", scope)
service = discovery.build("sheets", "v4", credentials=creds)
# change the spreadsheet_id if another Google Sheet is used
#spreadsheet_id = "1Oc1RgK_qUKQJqLhyd1isL6V3gTGW5eWnbjwfhXchXXs" #kalyn's test
spreadsheet_id = "1t1qYNwkGTWG3rsX8Si3cki3ewIIOUVrbkB7LzP5_TNA" #actual
value_input_option = "RAW"
insert_data_option = "INSERT_ROWS"
TW_MASTER_LIST = "5"
TW_WEB_DEV_APPLICATION_LIST_INTRO = "6"
TW_WEB_DEV_APPLICATION_LIST_FOUNDATION = "15"
TW_WEB_DEV_APPLICATION_LIST_CORE = "19"
TW_WEB_DEV_APPLICATION_LIST_CAPSTONE = "37"
TW_WEB_INTRO_PAID = "24"
TW_WEB_FOUNDATION_PAID = "50"
TW_WEB_CORE_PAID = "99"
TW_WEB_CAPSTONE_PAID = "160"
RANGES_AND_TYPE = {TW_MASTER_LIST: {"range": "Leads!A3:J", "list": True},
    TW_WEB_DEV_APPLICATION_LIST_INTRO: {"range": "Applied - Intro!A3:J", "list": True},
    TW_WEB_DEV_APPLICATION_LIST_FOUNDATION: {"range": "Applied - Foundation!A3:J", "list": True},
    TW_WEB_DEV_APPLICATION_LIST_CORE: {"range": "Applied - Core!A3:J", "list": True},
    TW_WEB_DEV_APPLICATION_LIST_CAPSTONE: {"range": "Applied - Capstone!A3:J", "list": True},
    TW_WEB_INTRO_PAID: {"range": "Paid - Intro!A3:J", "list": False},
    TW_WEB_FOUNDATION_PAID: {"range": "Paid - Foundation!A3:J", "list": False},
    TW_WEB_CORE_PAID: {"range": "Paid - Core!A3:J", "list": False},
    TW_WEB_CAPSTONE_PAID: {"range": "Paid - Capstone!A3:J", "list": False}}

# creates a url link for the wanted list or tag id
def create_asc_list_or_tag_url(list_or_tag_id, list_not_tag):
    if list_not_tag:
        return DEFAULT_URL+"&listid="+str(list_or_tag_id)+API_DEFAULT_PARAMETERS_ASC
    else:
        return DEFAULT_URL+"&tagid="+str(list_or_tag_id)+API_DEFAULT_PARAMETERS_ASC

# retrieves a set of all ids already in the specified spreadhsheet (by range)
def get_existing_ids_in_spreadsheet(range_):
    result = service.spreadsheets().values().get(spreadsheetId=spreadsheet_id, range=range_).execute()
    rows = result.get("values", [])
    return set([row[0] for row in rows])

# returns the string url to get information on the provided id
def create_id_url(id):
    return AC_CONTACTS_API_STRING+"/"+id+API_KEY_STRING

# returns API response in json format
def response_from_api_to_json(url):
    response = requests.get(url)
    return json.loads(response.text)

#return a datatime object representing the input timestamp in Taipei time zone
def convert_to_taipei_time(api_date):
    api_date = api_date[:-3]+"00"
    return datetime.datetime.strptime(api_date,API_DATE_FORMAT).astimezone(timezone(TIMEZONE))

# returns the offset to start the spreadsheet entries
def find_offset_after_first_date(asc_url):
    r = response_from_api_to_json(asc_url)
    offset = 0
    while convert_to_taipei_time(r["contacts"][-1]["cdate"])<FIRST_DAY_OF_FIRST_WEEK:
        offset+=100
        offset_url = asc_url+"&offset="+str(offset)
        r = response_from_api_to_json(offset_url)
    index = 0
    while convert_to_taipei_time(r["contacts"][index]["cdate"])<FIRST_DAY_OF_FIRST_WEEK:
        index+=1
    return offset+index

# collect all ids after the offset, and return them in both list and set formats
def return_all_ids_after_offset(asc_url, offset):
    r = response_from_api_to_json(asc_url+"&offset="+str(offset))
    all_ids_set = set()
    all_ids_list = list()
    while len(r["contacts"])>0:
        for contact in r["contacts"]:
            all_ids_set.add(contact["id"])
            all_ids_list.append(contact["id"])
        offset+=100
        r = response_from_api_to_json(asc_url+"&offset="+str(offset))
    return all_ids_set, all_ids_list

# for each new id, collect the necessary information to update the spreadsheet
def collect_contact_data_from_api(new_ids, list_or_tag_id, list_not_tag):
    contacts_dict = OrderedDict()
    tags_dict = {}
    for id in new_ids:
        contact_info = response_from_api_to_json(create_id_url(id))
        contacts_dict[id] = {"Email": contact_info["contact"]["email"]}
        contacts_dict[id]["First Name"] = contact_info["contact"]["firstName"]
        contacts_dict[id]["Last Name"] = contact_info["contact"]["lastName"]
        contacts_dict[id]["Date Created"] = convert_to_taipei_time(contact_info["contact"]["cdate"]).strftime("%Y-%m-%d")

        if list_not_tag:
            lists_url = contact_info["contact"]["links"]["contactLists"]+API_KEY_STRING
            contact_lists_r = response_from_api_to_json(lists_url)
            for lst in contact_lists_r["contactLists"]:
                if lst["list"]==list_or_tag_id:
                    contacts_dict[id]["List Subscription Date"] = convert_to_taipei_time(lst["sdate"]).strftime("%Y-%m-%d")
                    break

        tags_url = contact_info["contact"]["links"]["contactTags"]+API_KEY_STRING
        contact_tag_r = response_from_api_to_json(tags_url)
        contact_tags = []
        if not list_not_tag:
            for lst in contact_tag_r["contactTags"]:
                if lst["tag"]==list_or_tag_id:
                    contacts_dict[id]["List Subscription Date"] = convert_to_taipei_time(lst["cdate"]).strftime("%Y-%m-%d")
                    break
        for tag in contact_tag_r["contactTags"]:
            if tag["tag"] not in tags_dict:
                tag_r = response_from_api_to_json(tag["links"]["tag"]+API_KEY_STRING)
                tags_dict[tag["tag"]] = tag_r["tag"]["tag"]
            contact_tags.append(tags_dict[tag["tag"]])
        contacts_dict[id]["tags"] = contact_tags
    return contacts_dict

# sends the contacts' data to Google Sheets via API
def send_data_to_google_sheets(values, range_):
    value = {"values": []}
    for id in values:
        current_customer = values[id]
        new_row = []
        new_row.append(id)
        new_row.append(current_customer["Email"])
        new_row.append(current_customer["First Name"])
        new_row.append(current_customer["Last Name"])
        new_row.append(None)
        new_row.append(current_customer["Date Created"])
        new_row.append(current_customer["List Subscription Date"])
        new_row.append(None)
        new_row.append(None)
        new_row.append(", ".join([str(elem) for elem in current_customer["tags"]]))
        value["values"].append(new_row)
    # must send data to the Google API in chunks, since there is a limit on size to be sent at once
    for i in range(0, len(value["values"]), 100):
        value_chunk = {"values": value["values"][i:i+100]}
        request = service.spreadsheets().values().append(spreadsheetId=spreadsheet_id, range=range_, valueInputOption=value_input_option, insertDataOption=insert_data_option, body=value_chunk)
        response = request.execute()

def main():
    for list_id in RANGES_AND_TYPE:
        print(list_id)
        range_ = RANGES_AND_TYPE[list_id]['range']
        list_not_tag = RANGES_AND_TYPE[list_id]['list']
        seen_ids = get_existing_ids_in_spreadsheet(range_)
        print(len(seen_ids))
        asc_url = create_asc_list_or_tag_url(list_id, list_not_tag)
        offset = find_offset_after_first_date(asc_url)
        print(offset)
        all_ids_set, all_ids_list = return_all_ids_after_offset(asc_url, offset)
        new_ids = all_ids_set - seen_ids
        print(len(new_ids))
        ordered_new_ids = []
        for id in all_ids_list:
            if id in new_ids:
                ordered_new_ids.append(id)
        contacts = collect_contact_data_from_api(ordered_new_ids, list_id, list_not_tag)
        send_data_to_google_sheets(contacts, range_)

if __name__ == "__main__":
    main()
