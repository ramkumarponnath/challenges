/**
 * iterate from first to last
 * assign i to j and loop over j
 * check if arr[j] == j+1, break j loop and continue i loop
 * else check if arr[0] > arr[j+1] &&  j+1 <= arr[j+1], continue j
 * else swap++; arr[j] & arr[i]
 */
/**  Solution which fails three test cases due to timeout
for each position in the array
    if a position is occupied by the wrong number
        find the number that fits into the position
        perform a swap

const fs = require('fs');
let arr = [];
fs.readFile('MinSwaps.txt',(err, data) => {
    if(err) {
        return;
    } else {
        //console.log(data.toString().split(' '));
        arr = data.toString().split(' ').map(t => parseInt(t,10));
        let swap = 0;
        let n = arr.length;
        for(let i=0; i < n-1; i++) {
            if(arr[i] !== i+1) {
                let pos = arr.indexOf(i+1);
                [arr[i], arr[pos]] = [arr[pos], arr[i]];
                swap++;
                if(arr[n-1] === n) {
                    n--;
                }
            }
            
        }
        console.log(swap);
    }
});*/
let val = '2 31 1 38 29 5 44 6 12 18 39 9 48 49 13 11 7 27 14 33 50 21 46 23 15 26 8 47 40 3 32 22 34 42 16 41 24 10 4 28 36 30 37 35 20 17 45 43 25 19';
let arr = val.split(' ').map(arrTemp => parseInt(arrTemp, 10));

/**
 * 
 * for each position in the array
    if a number is in the wrong location
        find the position the number should go
        perform a swap
        This is because finding a number for a given location requires a linear scan, 
        but finding the location for a given number is as simple as it gets: 
        the number five should go into the fifth position. 
 */
function minimumSwaps(arr) {
    let swap = 0;
    let n = arr.length;
    for(let i=0; i < n-1; i++) {
        while(arr[i]-1 !== i) {
            let pos = arr[i]-1;
            [arr[i], arr[pos]] = [arr[pos], arr[i]];
            swap++;
            if(arr[n-1] === n) {
                n--;
            }
        }
        
    }
    console.log(swap);
    return swap;
}
minimumSwaps(arr);