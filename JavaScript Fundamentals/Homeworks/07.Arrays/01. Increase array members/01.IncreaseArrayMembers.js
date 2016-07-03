function IncreaseArrayMembers(args) {
    // body...
    var input = +args[0],
        array = [],
        i;

    for (i = 0; i < input; i += 1) {
        array[i] = i * 5;
        console.log(array[i]);
    }

}
//IncreaseArrayMembers(['5']);
