
function countLetter (str){
	var count = {};
  var trimmed = str.trim().split(' ');
  console.log(str)
	for (var i = 0; i < trimmed.length; i++){
    for(var j = 0; j < trimmed[i].length; j++) {
      var letter = trimmed[i][j]
      if(count[letter]){
        count[letter]++
      } else {
        count[letter] = 1
      }
    }
	}

	return count;
}

console.log(countLetter("     lighthouse in the house "))