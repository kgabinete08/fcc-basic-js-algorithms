// Free code camp basic js algorithms

function truncateString(str, num) {
  var newStr = "";
  if (str.length <= 3 || num <= 3) {
    newStr = str.slice(0, num) + "...";
  } else if (num >= str.length) {
    newStr = str;
  } else {
    newStr = str.slice(0, num - 3) + "...";
  }
  return newStr;
}
