let arr = [1,2,1,2,4,4], r=2;
function countingTriplets(arr, r) {
    let count = 0;
    let m2 = {}, m3 = {};
    arr.forEach(val => {
        if(m3.hasOwnProperty(val)) {
            count += m3[val];
        }
        if(m2.hasOwnProperty(val)) {
            m3[val * r] = m3.hasOwnProperty(val * r) ? m3[val * r] + m2[val] : 1; 
        } 
        m2[val * r] = m2.hasOwnProperty(val * r) ? m2[val * r] + 1: 1;
    });
    return count;
}
console.log(countingTriplets(arr,r));
