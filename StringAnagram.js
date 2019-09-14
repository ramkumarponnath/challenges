let a = 'fcrxzwscanmligyxyvym', b='jxwtrhvujlmrpdoqbisbwhmgpmeoke';
function makeAnagram(a, b) {
    let letter1={}, letter2={};
    let count = 0;
    for(let s of a) {
        letter1[s] = letter1[s]+1||1;
    }
    for(let s of b) {
        letter2[s] = letter2[s]+1||1;
    }
    for(let key of Object.keys(letter1)) {
        if(letter2[key]) {
            if(letter1[key] !== letter2[key]) {
                count += Math.abs(letter1[key]-letter2[key]);
                }
            delete letter2[key];
        }
        else {
            count+=letter1[key];
        }
    }
    count += Object.values(letter2).reduce((acc, item) => acc + item,0);
    console.log(count);
    return count;
}
makeAnagram(a,b)