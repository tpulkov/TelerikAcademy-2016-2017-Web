function MostFrequentNumber (args) {
  // body...
  var array = args[0].split('\n').map(Number),
      counter = 1,
      mostFrequentNumber = 0,
      mostFrequentCount = 1,
      i;
      array.sort();
      for(i = 0 ; i < array.length - 1; i += 1){
        if (array[i] === array[i + 1]) {
          counter += 1;
          if (counter > mostFrequentCount) {
            mostFrequentCount = counter;
            mostFrequentNumber = array[i];
          }
        }else {
          counter = 1;
        }
      }
      return mostFrequentNumber + ' (' + mostFrequentCount + ' times)';
}
