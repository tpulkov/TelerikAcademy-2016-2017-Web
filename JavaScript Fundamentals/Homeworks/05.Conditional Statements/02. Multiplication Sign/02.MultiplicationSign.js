function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        counter = 0;

    if (a < 0) {
        counter += 1;
    }
    if (b < 0) {
        counter += 1;
    }
    if (c < 0) {
        counter += 1;
    }
    if (a === 0 || b === 0 || c === 0) {
        console.log('0');
    } else {
        if (counter % 2) {
            console.log('-');
        } else {
            console.log('+');
        }
    }
}
