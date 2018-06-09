// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function longestWord(str) {
  // Split the words in the string with a space to separate them when they are searched in for loop.
  var word = str.split(" ");
  // initialise the counter to start at 0.
  var longestCounter = 0;
  for(i = 0; i < word.length; i++) {
    // if the current object of word within the word array is greater than 0
    // then the longestCounter should equal to the value of the current object
    // to return its highest word length.
    if(word[i].length > longestCounter) {
      longestCounter = word[i].length;
    }
  }
  return longestCounter;
}

longestWord("I am a fish that flies over the moon!");
