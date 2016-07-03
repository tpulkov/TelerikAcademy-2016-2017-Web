function solution(args) {

    var x = +args[0];
    var y = +args[1];
    var centerX = 1;
    var centerY = 1;
    var radius = 1.5;
    var topY = 1;
    var rightX = 5;
    var bottomY = -1;
    var leftX = -1;
    var outputNumber;

    var inCircle = Math.pow(x - centerX, 2) +
        Math.pow(y - centerY, 2) <= radius * radius;
    var outOfRange = x < leftX ||
        rightX < x ||
        y < bottomY ||
        y > topY;

    output = 'outside circle outside rectangle';

    if (inCircle && outOfRange) {
        output = 'inside circle outside rectangle';
    } else if (inCircle && !outOfRange) {
        output = 'inside circle inside rectangle';
    } else if (!inCircle && !outOfRange) {
        output = 'outside circle inside rectangle';
    } else {
        output = 'outside circle outside rectangle';

    }
    console.log(output);

}
