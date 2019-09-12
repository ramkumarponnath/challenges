let s1 = 'writetoyourparents';
let s2 = 'fghmqzldbc';

function twoStrings(s1, s2) {
    if (s1.length <= s2.length) {
        for(let s of s1) {
            if(s2.indexOf(s) > -1) {
                return "YES";
            }
        }
    } else {
        for(let s of s2) {
            if(s1.indexOf(s)) {
                return "YES";
            }
        }
    }
    return "NO";
}
console.log(twoStrings(s1, s2));