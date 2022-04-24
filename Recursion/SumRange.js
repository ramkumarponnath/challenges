function sumrange(n) {
    if(n === 1) return 1;
    return n + sumrange(n-1);
}

console.log(sumrange(10));