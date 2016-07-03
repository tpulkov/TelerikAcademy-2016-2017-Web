function MatrixOfNumbers(args) {
    // body...
    var squareMatrix = +args[0],
        space = ' ',
        i,
        j;

    for (i = 0; i < squareMatrix; i += 1) {
        for (j = i + 1; j <= squareMatrix + i; j += 1) {
            space += j + ' ';
        }
        space += '\n';
    }
    console.log(space);
}
// MatrixOfNumbers(['2']);
// MatrixOfNumbers(['3']);
// MatrixOfNumbers(['4']);
