/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    if (N==1) {
        return 0;
    }
    let half = Math.pow(2,N-2);
    if (K<=half) {
        return kthGrammar(N-1,K);
    }
    else {
        let result = kthGrammar(N-1,K-half);
        return result==1 ? 0 : 1;
    }
};
