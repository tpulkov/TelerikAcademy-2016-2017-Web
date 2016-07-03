function LexicographicallyCompare(args) {
    // body...
    var input = args[0].split('\n'),
        compare01 = input[0],
        compare02 = input[1],
        result;

    if (compare01 > compare02) {
        result = '>';
    } else if (compare01 < compare02) {
        result = '<';
    } else {
        result = '=';
    }
    console.log(result);
}

LexicographicallyCompare(['hello', 'halo']);
LexicographicallyCompare(['food', 'food']);
