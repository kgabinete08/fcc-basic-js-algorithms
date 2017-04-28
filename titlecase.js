// Free code camp basic js algorithms

function titleCase(str) {
  var strArray = str.split(" ");
  var newArr = [];

  for (var i = 0; i < strArray.length; i++) {
    var charsArray = strArray[i].toLowerCase().split("");
    charsArray[0] = charsArray[0].toUpperCase();
    var newWord = charsArray.join("");
    newArr.push(newWord);
  }
  return newArr.join(" ");
}

