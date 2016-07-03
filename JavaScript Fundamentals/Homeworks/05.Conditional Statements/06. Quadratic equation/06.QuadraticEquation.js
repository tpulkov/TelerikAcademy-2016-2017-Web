function QuadraticEquation (args) {
  // body...
  var a = +args[0],
      b = +args[1],
      c = +args[2],
      Discriminant = (b * b ) - (4 * a * c),
      firstX = ((-b - (Math.sqrt(Discriminant)))/ (2 * a)),
      secondX = ((-b + (Math.sqrt(Discriminant)))/ (2 * a)),
      equalIsZero = (-b) / (2 * a);

      if (Discriminant === 0) {
        if (equalIsZero < 0) {
          console.log('x1=x2=-' + equalIsZero.toFixed(2));
        }
        else {
          console.log('x1=x2=' + equalIsZero.toFixed(2));
        }
      }
      else if (Discriminant > 0) {
        if (firstX < secondX) {
          console.log('x1=' + firstX.toFixed(2) + '; x2=' + secondX.toFixed(2));
        }
        else {
          console.log('x1=' + secondX.toFixed(2) + '; x2=' + firstX.toFixed(2));

        }
      }
      else {
        console.log('no real roots');
      }
}
//
// QuadraticEquation(['5', '2', '8']);
// QuadraticEquation(['2', '5', '-3']);
// QuadraticEquation(['-1', '3', '0']);
// QuadraticEquation(['0.2', '9.572', '0.2']);
