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
    const S = readLine();
}
function main() {
    const S = readLine();
    const N = parseInt(S);
    try {
        console.log(isNaN(N) ? "Bad String" : N);
    } catch (e) {
        console.log('Bad String')
    }
}