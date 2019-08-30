function countingValleys(n, s) {
    let valley = 0;
    let isValley = false;
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            if (s[i] === 'D') {
                isValley = true;
            }
        }

        else if (stack.indexOf(s[i]) === -1) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
        if (isValley && stack.length === 0) {
            valley++;
            isValley = false;
        }
    }
    return valley;

}