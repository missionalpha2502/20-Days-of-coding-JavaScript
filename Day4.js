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

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let total_cost;
    total_cost = meal_cost + meal_cost * tip_percent / 100 + meal_cost * tax_percent / 100;
    console.log(Math.round(total_cost));
}





function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
function main() {
    const N = parseInt(readLine(), 10);
    if (N % 2 != 0) {
        console.log("Weird");
    } else if (N % 2 == 0 && N >= 2 && N <= 5) {
        console.log("Not Weird");
    } else if (N % 2 == 0 && N >= 6 && N <= 20) {
        console.log("Weird");
    } else if (N % 2 == 0 && N > 20) {
        console.log("Not Weird");
    }
}