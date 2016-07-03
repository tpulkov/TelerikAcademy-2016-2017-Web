function solve(args) {
    var input = +args[0];

    var isPrime = true;
    var length = Math.sqrt(input);

    if (input < 2) {
        isPrime = false;
    } else {
        for (var i = 2; i <= length; i += 1) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    console.log(isPrime);

}
