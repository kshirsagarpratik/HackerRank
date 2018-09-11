'use strict';

const fs = require('fs');

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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    'use strict';

    const fs = require('fs');

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

    // Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    const max = ar.reduce((acc, next) => {
        if (acc < next)
            acc = next;
        return acc;
    });
    const maxCount = ar.reduce((acc, next) => {
        if (next === max)
            acc++;
        return acc;
    }, 0);

    return maxCount;
}

    function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

        const arCount = parseInt(readLine(), 10);

        const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

        let result = birthdayCakeCandles(ar);

        ws.write(result + "\n");

        ws.end();
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
