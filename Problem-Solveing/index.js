const ar = [1,2,1,2,1,2,3];
ar.sort((a, b) => {
    return a - b
});
let count = 0;
let countPair = 0;
let oddSocks = 0;

const pairSocks = (color) => {
    if (count === 1) {
        console.log(`there is ${oddSocks} odd socks left, one of each color. Number of pair socks is ${countPair}`)
    } else {
        if (count % 2 === 0) {
            console.log(`there is ${count/2} pair of color ${color}`)
        } else {
            console.log(`there is ${(count-1)/2} pair of color ${color}`);
        }
        countPair++;
    }
    count = 0;
}
// ar = [1,1,1,2,2,2,3]
ar.forEach((element, index) => {
    let goNext = index + 1;
    count++;
    if (element !== ar[goNext]) {
        oddSocks++;
        pairSocks(element);
    }
});

