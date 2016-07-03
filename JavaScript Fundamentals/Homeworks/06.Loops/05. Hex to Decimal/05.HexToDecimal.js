function HexToDecimal(args) {
    // body...
    var inputHex = args[0],
        decimalNumber = 0,
        temporatyNumber,
        power = 1,
        i;

    for (i = inputHex.length - 1; i >= 0; i -= 1) {
        switch (inputHex[i]) {
            case 'A':temporatyNumber = '10';break;
            case 'B':temporatyNumber = '11';break;
            case 'C':temporatyNumber = '12';break;
            case 'D':temporatyNumber = '13';break;
            case 'E':temporatyNumber = '14';break;
            case 'F':temporatyNumber = '15';break;

            default:
                temporatyNumber = +inputHex[i];
                break;
        }
        decimalNumber += temporatyNumber * power;
        power *= 16;
    }
    console.log(decimalNumber);
}
// HexToDecimal(['FE']);
// HexToDecimal(['1AE3']);
// HexToDecimal(['4ED528CBB4']);
