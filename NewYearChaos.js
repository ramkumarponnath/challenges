/**
 * Condition 1: No bribe happened. No change in queue position
 * Condition 2: Bribe happened and change in position
 * a. Minimum one bribe -- if(arr)
 * b. Minimum two bribe
 * c. More than 2 bribe 
 * if(arr[i]!==i+1) {
 *  move to condition 2
 * }
 * condition 2: if(arr[i-1] == i+1) {
 *  swap++;
 *  swap(arr, i, i-1)
 * } else if(arr[i-2] == i+1) {
 *  swap+=2;
 *  swap(arr,i,i-2) 
 * } else "Too chaotic"
 */

//let arr = [2,1,5,3,4];
let arr = [1,2,5,3,7,8,6,4];

function minimumBribes(arr) {
    let bribe =0;
    for(let i = arr.length-1; i>0; i--) {
        if(arr[i] !== i+1) {
            if(arr[i-1] === i+1) {
                bribe++;
                arr = swap(arr, i-1, i);
            } else if(arr[i-2] === i+1) {
                bribe+=2;
                arr = swap(arr, i-2, i);
            } else {
                console.log("Too chaotic");  
                return;
            }
        }
    }
    console.log(bribe);
}
//Swap i and i+1 and i+1 and i+2
function swap(arr, newpos, oldpos) {
    for(let i = newpos; i<oldpos; i++) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
    return arr;
}

minimumBribes(arr);