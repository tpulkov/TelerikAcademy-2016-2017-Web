function solve(args) {
    var a = +args[0];
    var b = +args[1];

    if (a > b) {
        var temporary = a;
        a = b;
        b = temporary;
    }
    console.log(a + " " + b);
}
