// Free code camp basic js algorithms

function factorialize(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

// using recursion

var factorial = function(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * (factorial(num - 1));
  }
};
