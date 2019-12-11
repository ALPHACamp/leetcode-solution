/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let odd = 1;
    for (let even=0; even<A.length; even+=2) {
        if (A[even]%2!=0) {
            while (A[odd]%2!=0) {
                odd+=2;
            }
            let temp = A[even];
            A[even] = A[odd];
            A[odd] = temp;
        }
    }
    return A;
};
