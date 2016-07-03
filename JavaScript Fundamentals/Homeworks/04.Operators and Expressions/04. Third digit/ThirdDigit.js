function solve(args) {

    var number = +args;
    var outputNumber = (number / 100 | 0) % 10;

    if (outputNumber === 7) {
        console.log("true");
    } else {
        console.log("false " + outputNumber);
    }
}
