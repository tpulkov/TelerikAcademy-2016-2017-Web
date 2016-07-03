function solve(args){
var input = +args;
var thirdBit = ((1 << 3) & input)>> 3;
console.log(thirdBit);
}
