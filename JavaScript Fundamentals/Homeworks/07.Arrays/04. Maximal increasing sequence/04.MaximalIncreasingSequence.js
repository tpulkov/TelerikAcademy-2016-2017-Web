function MaximalIncreasingSequence(args) {
    var array = args[0].split('\n').map(Number),
        currentSequence = 1,
        maxSequence = 1,
        length = array.length,
        i;

    for (i = 1; i < length; i++) {
        if (array[i] > array[i - 1]) {
            currentSequence += 1;
        } else {
            if (currentSequence > maxSequence) {
                maxSequence = currentSequence;
            }

            currentSequence = 1;
        }
    }

    console.log(maxSequence);
}
MaximalIncreasingSequence(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
