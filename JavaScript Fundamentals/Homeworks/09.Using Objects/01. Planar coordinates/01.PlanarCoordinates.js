function solve(args) {
    // body...
    var input = args.map(Number),
        step = 4,
        sizes = [],
        i,
        output;

    function distance(index) {
        // body...
        var array = input,
            a = Math.abs(array[index] - array[index + 2]),
            b = Math.abs(array[index + 1] - array[index + 3]);

        return Math.sqrt((a * a) + (b * b));
    }
    for( i = 0; i < input.length; i += step){
      sizes.push(+distance(i));
    }

    if (sizes[0] + sizes[1] > sizes[2] && sizes[1] + sizes[2]> sizes[0] && sizes[0]+ sizes[2]> sizes[1]) {
      output = 'Triangle can be built';
    } else{
      output = 'Triangle can not be built';
    }

    console.log(
      sizes.map(Number)
            .map(function(a){
      return a.toFixed(2)
    }).join('\n'));
    console.log(output);
}

solve(['5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12']);
solve([ '7', '7', '2', '2',  '5', '6', '2', '2',  '95', '-14.5', '0', '-0.123']);
