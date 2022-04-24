function totalIntegers(arr) {
    var count = 0;
    if(arr.length === 0 ) return 0;
    for(let ele of arr) {
        if(typeof ele === 'number') {
            ++count;
        } else if(Array.isArray(ele)) {
            count += totalIntegers(ele);
        }
        
    }
    return count;
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));