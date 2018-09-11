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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let timeArr = s.split(':');
    let hhOld = Number(timeArr[0]);
    let mm = timeArr[1];
    let tail = [...timeArr[2]];
    let ss = tail.slice(0, 2).join().replace(',', '');
    let polarity = tail[2];
    let hhNew;
    if (polarity === 'P')
        if (hhOld !== 12)
            hhNew = String(12 + hhOld);
        else
            hhNew = String(hhOld);
    else if (polarity === 'A')
        if(hhOld === 12)
            hhNew = '0' + String(12 - hhOld);
        else
            hhNew = '0' + String(hhOld);
    let h24 = `${hhNew}:${mm}:${ss}`;
    return h24;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
