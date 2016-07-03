function FirstLargerThanNeighbours(args) {
    // body...
    var input = +args[0],
        array = args[1].split(' ').map(Number),
        i;

    for (i = 1; i < input - 1; i += 1) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            console.log(i);
            break;
        }
    }
}

var test = ['6', '-26 -25 -28 31 2 27'];

FirstLargerThanNeighbours(test);
