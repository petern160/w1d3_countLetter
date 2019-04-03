function countLetters(str){
 var noSpaces = str.split(" ").join("");
 var countLetters = {};

 for (var i = 0 ; i < noSpaces.length; i++){ // each character in the array
   if(countLetters[noSpaces[i]]) // this character already a key
     countLetters[noSpaces[i]].push(i);
   else
     countLetters[noSpaces[i]]=[i]; //new key
 }
 return countLetters;
}

console.log(countLetters("apple"));