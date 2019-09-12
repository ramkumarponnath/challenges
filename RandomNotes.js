let magazine = 'ive got a lovely bunch of coconuts'.split(' ');
let note = 'ive got some coconuts'.split(' ');
function checkMagazine(magazine, note) {
    for(let s of note) {
        let index = magazine.indexOf(s);
        if(index > -1) {
            magazine.splice(index,1);
        } else {
            return false;
        }
    }
    return true;
}
console.log(checkMagazine(magazine, note));