// Free code camp basic js algorithms

function palindrome(str) {
  var cleanStr = str.replace(/[^a-z0-9]/ig, "").toLowerCase();
  var reversedStr = cleanStr.split("").reverse().join("");
  if (cleanStr === reversedStr) { 
    return true;
  }
  return false;
}
