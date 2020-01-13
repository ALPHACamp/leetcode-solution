/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const len = emails.length;
    let different = new Set();
    for (let i=0; i<len; i++) {
        let split = emails[i].split("@");
        let local = split[0];
        let domain = split[1];
        if (local.indexOf("+")!=-1) {
            local = local.substring(0,local.indexOf("+"));
        }
        local = local.replace(/\./g, "");
        different.add(local+"@"+domain);
    }
    return different.size;
};
