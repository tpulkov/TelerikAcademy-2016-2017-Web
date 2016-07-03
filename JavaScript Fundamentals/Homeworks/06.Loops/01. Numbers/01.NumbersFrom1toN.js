function NumbersFromOneToN(args) {


    var input = +args[0],
        array = [];
    for (var i = 1; i <= input; i += 1) {
        array += i + ' ';

    }

    console.log(array)
}
// NumbersFromOneToN(['5']);
// NumbersFromOneToN(['1']);
