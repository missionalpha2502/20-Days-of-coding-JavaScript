'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);
}
function main() {
    const n = parseInt(readLine(), 10);
    let i;
    for (i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}