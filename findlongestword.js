// Free code camp basic js algorithms

function findLongestWord(str) {
  var strArray = str.split(" ");
  var longestWord = "";

  for (var i = 0; i < strArray.length; i++) {
    if (longestWord.length < strArray[i].length) {
      longestWord = strArray[i];
    }
  }
  return longestWord.length;
}
