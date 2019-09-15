const fs = require('fs');
let s = 'aaaabbcc';
//let s = '';
fs.readFile('SherlockValidStringInput.txt',(err,data) => {
    if(err)
        return;
    else {
        //s = data.toString();
    }
    let letters = {};
    let max = 0, min = 0;
    let countmap = {};
    let count = 0;
    for(let ch of s) {
        let val = letters[ch] + 1 || 1;
        letters[ch] = val;
    }
    for(let val of Object.values(letters)){
        if(!countmap.hasOwnProperty(val)) {
            count++;
            if(count == 3) {
                console.log("NO");
                return "NO";
            }
        }
        let v = countmap[val] + 1 || 1;
        countmap[val] = v;
        max = max == 0 ? val : max > val ? max : val;
        min = min == 0 ? val : min < val ? min : val;
    }
    console.log(letters, countmap, max, min);
    if(max == min || countmap[min] == 1) {
        console.log("YES");
        return "YES";
    } else if(max - min > 1 || countmap[max] - 1 == min || countmap[max] > 1) {
        console.log("NO");
        return "NO";
    } else {
        console.log("YES");
        return "YES";
    }
});
//{11111:9, 1:1}
//{2:2, 4:1}