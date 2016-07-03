function solve(args) {
    var first = +args[0];
    var second = +args[1];
    var inCirgle = false;

    var distance = Math.sqrt( first * first + second * second);
    var output  = distance <= 2 ? "yes " + distance.toFixed(2)
    : "no " + distance.toFixed(2);
    console.log(output);


}
