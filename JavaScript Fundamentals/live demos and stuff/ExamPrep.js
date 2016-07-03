

function Number(args){
  var numbers = args.map(Number);
  return numbers;

var strs = ["1", "11", "111", "1111"];

console.log(strs.map(Number).reduce((s, item) => s + item));

}
