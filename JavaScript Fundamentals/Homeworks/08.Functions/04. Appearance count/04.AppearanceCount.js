function AppearanceCount(args) {
    // body...
    var arraySize = +args[0],
        array = args[1].split(' ').map(Number),
        x = +args[2],
        count = 0,
        i;

    for (i = 0; i < arraySize; i += 1) {
        if (array[i] === x) {
            count += 1;
        }
    }
    console.log(count);
}

//AppearanceCount(['8\n28 6 21 6 -7856 73 73 -56\n73']);
