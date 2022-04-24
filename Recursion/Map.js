function head(arr) {
    return arr[0];
}

function rest(arr) {
    return arr.slice(1, arr.length);
}

function map(arr, callback) {
    if(arr.length === 0) return [];
    return [].concat(callback(head(arr))).concat(map(rest(arr), callback));
}

console.log(map([1,2,3], a => a * 2));