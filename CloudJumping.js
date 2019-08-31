function jumpingOnClouds(c) {
    
    if (c.length === 1 || c.length === 2) {
        return 1;
    } else {
        let jump = 0;
        let step = 1;
        for (let i = 1; i < c.length; i++) {
            if (step!==2 && c[i+1] === 0) {
                step++;
            } else {
                jump++;
                step = 1;
            }
        }
        return jump;
    }
}