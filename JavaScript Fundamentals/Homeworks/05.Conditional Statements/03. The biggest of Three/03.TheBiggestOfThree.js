function solve(args) {
    // body...
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if (a > c && b > c) {
        if (a > b) {
            console.log(a);
        } else {
            console.log(b);
        }
    } else if (a > b && c > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else {
        if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }

}
