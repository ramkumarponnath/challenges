function sockMerchant(n, ar) {
    let pairs = 0;
    let found = [];
    for (let i = 0; i < n - 1; i++) {
        if (found.indexOf(i) === -1) {
            for (let j = i + 1; j < n; j++) {
                if (found.indexOf(j) === -1 && ar[i] === ar[j]) {
                    pairs++;
                    found = found.concat([i, j]);
                    break;
                }
            }    
        }
    }
    return pairs;
}