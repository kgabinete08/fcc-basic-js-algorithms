// Free code camp basic js algorithms

function largestOfFour(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var largest = Math.max.apply(null, arr[i]);
    newArr.push(largest);
  }
  return newArr;
}
