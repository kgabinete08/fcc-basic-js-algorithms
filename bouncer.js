// Free code camp basic js algorithms

function bouncer(arr) {
  function falsey(val) {
    if (val !== false) { return val; }
  }
  var newArr = arr.filter(falsey);
  return newArr;
}
