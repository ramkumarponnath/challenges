/**
 * 
 * @param {*} n 
 * @param {*} queries 
 */
function arrayManipulation(n, queries) {
    let arr = Array(n+1).fill(0);
    let max = 0;
    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        let op = queries[i][2];
        arr[start - 1] += op;
        arr[end] -= op;
    }
    for (let i = 1; i <=n; i++) {
        arr[i] += arr[i - 1];
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}