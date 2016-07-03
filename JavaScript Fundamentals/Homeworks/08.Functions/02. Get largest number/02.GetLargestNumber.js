function GetLargestNumber(args) {
    // body...
    var input = args[0].split(' ').map(Number),
        firstNum = input[0],
        secondNum = input[1],
        thirdNum = input[2];

    if (getMax(firstNum, secondNum) > thirdNum) {
        return getMax(firstNum, secondNum);
    } else {
        return thirdNum;
    }

    function getMax(first, second) {
        // body...
        return first > second ? first : second;
    }
}
