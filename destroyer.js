// Free code camp basic js algorithms

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  var newArr = arr.filter(function(val) {
    return args.indexOf(val) == -1;
  });
  return newArr;
}
