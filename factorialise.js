// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialise(num) {
  // if number is a negative it returns false and terminates program.
  if(num === -1) {
    return false;
  // if number is a zero it continues to factorialise on top.
  } else if(num === 0){
    return 1;
  } else {
    // returns the output when the last number consecutively times the previous number.
    return (num * (factorialise(num - 1)));
  }
}

factorialise(4);
