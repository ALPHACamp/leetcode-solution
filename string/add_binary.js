/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = "";
    let aI = a.length;
    let bI = b.length;
    let c = 0;
    var cases = function(temp) {
        switch(temp) {
            case 0:
                ans = 0 + ans;
                break;
            case 1:
                ans = 1 + ans;
                c = 0;
                break;
            case 2:
                ans = 0 + ans;
                c = 1;
                break;
            case 3:
                ans = 1 + ans;
                c = 1;
                break;
        }
    }
    while (aI>=0&&bI>=0) {
        let temp = c+parseInt(a[aI],10)+parseInt(b[bI],10);
        cases(temp);
        aI--;
        bI--;
    }
    while (aI>=0) {
        let temp = c+parseInt(a[aI],10);
        cases(temp);
        aI--;
    }
    while (bI>=0) {
        let temp = c+parseInt(b[bI],10);
        cases(temp);
        bI--;
    }
    if (c==1) {
        ans = "1" + ans;
    }
    return ans;
};
