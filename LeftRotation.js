function rotLeft(a, d) {
    //let arr = Array(a).fill(1).map((x,y) => x+y)
    let res = [];
    let n = d%a.length;
    res = a.filter((x,i) => i >= n);
    res = res.concat(a.filter((x,i) => i < n));
    return res;
}
let x ='';
console.log(rotLeft([1,2,3,4,5],4).join(' '+'\n'));