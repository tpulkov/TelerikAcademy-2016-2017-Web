function binarySearch(args) {
    // body...
    var input = args[0].split('\n').map(Number),
        x = input[input.length - 1],
        indexOfX,
        i;

    input.shift();
    input.pop();
    input.sort(function(a, b) {
        // body...
        return a - b;
    });

    indexOfX = binSearch(input, x, 0, input.length - 1);
    return indexOfX;

    function binSearch(array, number, start, end) {
        // body...
        if (array[start] > number || number > array[end]) {
            return (-1);
        }
        var middle = ((start + end) / 2) | 0;
        if (array[middle] === number) {
            return middle;
        } else {
            if (array[middle] > number) {
                return binSearch(array, number, start, (middle - 1));
            } else {
                return binSearch(array, number, (middle + 1), end);
            }
        }
    }

}
