let arr = [[-1, -1, 0, -9, -2, -2], [-2, -1, -6, -8, -2, -5], [-1, -1, -1, -2, -3, -4], [-1, -9, -2, -4, -4, -5], [-7, -3, -3, -2, -9, -9], [-1, -3, -1, -2, -4, -5]];
//let arr =[[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]];

function hourglassSum(arr) {
    let sum = undefined;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let subsum = 0;
            for (let k = i; k <= i + 2; k++) {
                for (let l = j; l <= j + 2; l++) {
                    if (k === i + 1 && (l === j || l === j + 2)) {
                        continue;
                    }
                    subsum += arr[k][l];
                }
            }
            if (sum === undefined || subsum > sum) {
                sum = subsum;
            }
        }
    }
    return sum;
}

console.log(hourglassSum(arr));