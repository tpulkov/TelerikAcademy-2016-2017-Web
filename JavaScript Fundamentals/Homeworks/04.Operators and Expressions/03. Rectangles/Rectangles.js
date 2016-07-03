function solve(args){

var width = +args[0];
var length = +args[1];
var area = width * length;
var perimeter = width * 2 + length * 2;

console.log(area.toFixed(2)+ " " + perimeter.toFixed(2));
}
