function LargerThanNeighbours (args) {
  // body...
  var input = +args[0],
      array = args[1].split(' ').map(Number),
      count = 0,
      i;

      for (i = 1; i < input - 1; i += 1){
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
          count +=1;
        }
      }
      console.log(count);
}

var test = ['6', '-26 -25 -28 31 2 27'];

LargerThanNeighbours(test);
