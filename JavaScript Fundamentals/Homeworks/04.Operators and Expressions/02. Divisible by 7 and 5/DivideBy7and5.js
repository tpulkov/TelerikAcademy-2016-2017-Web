function solve(args){
  var number = +args;

  if (number % 5 || number % 7) {
    console.log("false " + number)
  } else{
    console.log("true " + number)
  }
}
