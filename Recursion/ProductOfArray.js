function productOfArray(arr) {
    if(arr.length === 0) return 1;
    else {
        return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1));
    }
}

console.log(productOfArray([1,2,3,10]));