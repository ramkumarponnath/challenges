/*const fs = require('fs');
let queries = [];
const ws = fs.readFile('FrequencyQueries.txt', (err, data) => {
    console.log(data.length);
    console.log(data.toString().split(' ').length);
});
console.log(queries);*/
let queries = [[1, 5],
[1, 6],
[3, 2],
[1, 10],
[1, 10],
[1, 6],
[2, 5],
[3, 2]];

function freqQuery(queries) {
    const result = [];
    const hash = {};
    const freq = [];
    queries.forEach(query => {
        const [action, value] = query;
        const initValue = hash[value] || 0;
        switch (action) {
            case 1:
                hash[value] = initValue + 1;
                freq[initValue] = (freq[initValue] || 0) - 1;
                freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
                break;
            case 2:
                if (initValue > 0) {
                    hash[value] = initValue - 1;
                    freq[initValue - 1] += 1;
                    freq[initValue] -= 1;
                }

                break;
            case 3:
                result.push(freq[value] > 0 ? 1 : 0);
                break;
        }
    });
    console.log(result);
    return result;
}
freqQuery(queries); 