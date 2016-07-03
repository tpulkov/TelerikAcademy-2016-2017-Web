function EnglishDigit(args) {
    // body...
    var input = +args;
    return lastDigit(input);

    function lastDigit(input) {
        switch (input % 10) {
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;
            case 7:
                return 'seven';
                break;
            case 8:
                return 'eight';
                break;
            case 9:
                return 'nine';
                break;
            case 0:
                return 'zero';
                break;
        }
    }
}
