/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const len = bills.length;
    let change = [0,0];
    for (let i=0; i<len; i++) {
        if (bills[i]==5) {change[0]++}
        else if (bills[i]==10) {
            if (change[0]<=0) {return false}
            change[0]--;
            change[1]++;
        }
        else {
            if (change[1]>0&&change[0]>0) {change[0]--;change[1]--}
            else if (change[0]>=3) {change[0]-=3}
            else {return false}
        }
    }
    return true;
};
