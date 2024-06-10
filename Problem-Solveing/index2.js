const s = 'abcac';
const n = 10;
let count = 0;

for (let index = 1; index <= n; index++) {
    if (s[index % s.length].includes('a')) {
        count++;
    }
}

console.log(`There are ${count} occurrences of a`)