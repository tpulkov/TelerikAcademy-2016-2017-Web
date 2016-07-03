function PrimeNumbers(args) {
    // body...
    var i = +args,
        isPrime,
        j;
    for (i; i >= 2; i -= 1) {
        for (j = 2; j <= Math.floor(Math.sqrt(i)); j += 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        if (isPrime) {
            return i
        }
    }
}
