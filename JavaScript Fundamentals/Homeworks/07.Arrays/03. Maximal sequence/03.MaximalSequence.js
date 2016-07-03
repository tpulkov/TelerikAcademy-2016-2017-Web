function MaximalSequence(args) {
    // body...
    var input = args[0].split('\n').map(Number),
        currSequence = 1,
        maxSequence = 1,
        maxNumber = 0,
        i;


    for (i = 0; i < input.length - 1; i += 1) {
        if (input[i] == input[i + 1]) {
            currSequence += 1;
            if (currSequence > maxSequence) {
                maxSequence = currSequence;
                maxNumber = input[i];
            }
        } else {
            currSequence = 1;
        }
    }
    console.log(maxSequence)
}
MaximalSequence(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
