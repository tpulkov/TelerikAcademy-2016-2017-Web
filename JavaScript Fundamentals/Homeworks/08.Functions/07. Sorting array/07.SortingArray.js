function SortingArray (args) {
  // body...
  var arrayLength = +args[0],
      array = args[1].split(' ').map(Number);

      var sortedArray = array.sort(function (a, b){
        return a -b;
      });
      return sortedArray.join(' ');
}
