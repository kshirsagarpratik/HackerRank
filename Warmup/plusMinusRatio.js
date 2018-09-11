'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    const ratioArray = arr.reduce((acc, next) => {
        if (next > 0)
            acc[0]++;
        if (next < 0)
            acc[1]++;
        if (next === 0)
            acc[2]++;
        return acc;
    }, [0, 0, 0]).map((ele) => (ele / arr.length).toPrecision(6));

    ratioArray.forEach(element => console.log(element));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
