//TASK:
//Complete the code in the editor below. The variables , , and  are already declared and initialized for you. You must:
//[1] Declare  variables: one of type int, one of type double, and one of type String.
//[2] Read  lines of input from stdin\n
//(according to the sequence given in the Input Format section below) and initialize your  variables.
//[3] Use the  operator to perform the following operations:
//Print the sum of  plus your int variable on a new line.
//Print the sum of  plus your double variable to a scale of one decimal place on a new line.
//Concatenate  with the string you read as input and print the result on a new line.



//SOLUTION:
// Declare second integer, double, and String variables.
let i2, d2, s2
// Read and save an integer, double, and String to your variables.
i2 = parseInt(readLine());
d2 = parseFloat(readLine());
s2 = readLine();
// Print the sum of both integer variables on a new line.
console.log(i + i2);
// Print the sum of the double variables on a new line.
console.log(parseFloat(d + d2).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s.concat(s2));
