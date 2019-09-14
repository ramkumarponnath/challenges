/*const fs = require('fs');
let queries = [];
const ws = fs.readFile('FrequencyQueries.txt', (err, data) => {
    console.log(data.length);
    console.log(data.toString().split(' ').length);
});
console.log(queries);*/
let queries = [ [ 1, 5 ],
[ 1, 6 ],
[ 3, 2 ],
[ 1, 10 ],
[ 1, 10 ],
[ 1, 6 ],
[ 2, 5 ],
[ 3, 2 ] ];

function freqQuery(queries) {
    let frequency = {};
    let result = [];
    queries.forEach(query => {
        let [q,val] = query;
        switch(q) {
            case 1:
                frequency[val] = frequency[val] + 1 || 1;
                break;
            case 2:
                if(frequency.hasOwnProperty(val)) {
                    if(frequency[val])
                        frequency[val] = frequency[val] - 1;
                    else
                        delete frequency[val];
                }
                break;
            case 3:
                if(Object.values(frequency).includes(val)) {
                    result.push(1);
                } else {
                    result.push(0);
                }
                break;
        }
    });
    console.log(result);
    return result;
}
freqQuery(queries); 