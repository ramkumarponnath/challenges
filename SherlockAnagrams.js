let s = 'kkkk';
function sherlockAndAnagrams(s) {
    let count = 0;
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        for(let j=i+1; j<=s.length; j++) {
            let substr = s.slice(i,j);
            arr.filter(item => item.length === substr.length).forEach(item => {
                count+=checkAnagram(item,substr);
            })
            arr.push(substr);
        }
    }
    
    return count;
}
function checkAnagram(s1,s2) {
    let letters1 = {};
    let letters2 = {};
    if(s1.length === s2.length) {
        for(let s of s1) {
            letters1[s] = letters1[s] ? letters1[s]+1 : 1;
        }
        for(let s of s2) {
            letters2[s] = letters2[s] ? letters2[s]+1 : 1;
        }
        for(let key of Object.keys(letters1)) {
            if(letters1[key] !== letters2[key]) {
                return 0;
            }
        }
    } else {
        return 0;
    }
    return 1;
}
console.log(sherlockAndAnagrams(s));