function MinMaxSumAverageOfNnumbers(args) {
    // body...
    var min = +args[0],
        max = +args[0],
        sum = 0,
        average = 0;

    for (var i = 0; i < args.length; i += 1) {
        if (min > +args[i]) {
            min = +args[i];
        }
        if (max < +args[i]) {
            max = +args[i]
        }
        sum += +args[i];
    }
    average = sum / args.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + average.toFixed(2));
}
// 
// MinMaxSumAverageOfNnumbers(['2', '5', '1']);
// MinMaxSumAverageOfNnumbers(['2', '-1', '4']);
