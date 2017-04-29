// Free code camp basic js algorithms

function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  var count = 0;

  for (var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2.charAt(i)) !== -1) {
      count += 1;
    }
  }
  if (count == str2.length) {
    return true;
  }
  return false;
}
