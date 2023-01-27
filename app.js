process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

function Solution() {
    //Write your code here
    let stack = [];
    let queue = [];
    this.pushCharacter = (n) => {
        stack.push(n);
    }
    this.popCharacter = () => {
        return stack.pop();
    }

    this.enqueueCharacter = (n) => {
        queue.push(n)
    }
    this.dequeueCharacter = () => {
        return queue.shift();
    }

}
