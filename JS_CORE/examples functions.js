// sum(1)(2)
function sum(a) {
  return function (b) {
    return a + b;
  };
}
