let s = 'AAAA';
function alternatingCharacters(s) {
    let count = 0;
    for(let i = 1; i< s.length; i++) {
        if(s[i-1] === s[i])
            count++;
    }
    return count;
}
console.log(alternatingCharacters(s));