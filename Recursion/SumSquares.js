function SumSquares(arr) {
    let sum = 0;
    if(arr.length === 0) return 0;
    for(let ele of arr) {
        if(typeof ele === 'number') {
            sum += square(ele);
        } else {
            sum+= SumSquares(ele);
        }
    }
    return sum;
}

console.log(SumSquares([10,[[10],10],[10]]));