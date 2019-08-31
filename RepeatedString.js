function repeatedString(s, n) {
    let itr = Math.floor(n / s.length);
    let mod = n % s.length;
    let pos = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a') {
            pos++;
        }
    }
    pos = pos * itr;
    for (let i = 0; i < mod; i++) {
        if (s.charAt(i) === 'a') {
            pos++;
        }
    }
    return pos;
}