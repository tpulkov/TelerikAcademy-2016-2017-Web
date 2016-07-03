function selectionSort(args) {
    var array = args[0].split('\n').map(Number),
        iMin,
        i,
        j;

    for (i = 1; i < array.length; i += 1) {
        iMin = i;
        for (j = i + 1; j < array.length; j += 1) {
            if (array[j] < array[iMin]) {
                iMin = j;
            }
        }

        if (iMin != i) {
            array[i] = array[i] + array[iMin];
            array[iMin] = array[i] - array[iMin];
            array[i] = array[i] - array[iMin];
        }
    }

    array.shift();
    console.log(array.join('\n'));
}
selectionSort(['6', '3', '4', '1', '5', '2', '6']);
selectionSort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);
