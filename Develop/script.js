// Assignment Code

// Array of special characters to be included in password
var specialArray = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerNumArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperNumArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Confirms alerts to set booleans as either true or false
var length = prompt("How many characters would you like your password to be?");
var special = confirm("Would you like special characters in your password? Press 'Okay' for yes and 'Cancel' for no.")
var numbers = confirm("Would you like numbers in your password? Press 'Okay' for yes and 'Cancel' for no.")
var upper = confirm("Would you like upper case letters in your password? Press 'Okay' for yes and 'Cancel' for no.")
var lower = confirm("Would you like lower case letters in your password? Press 'Okay' for yes and 'Cancel' for no.")

//Set empty array to hold user's password
var password = [];
//Users selected characters pushed here
var guaranteedCharacters = [];

var possCharacters = [];

//array of arrays
function generatePassword(){
  
    if(special === true){
      possCharacters = possCharacters.concat(specialArray);
    } 

    if(numbers === true){
      possCharacters = possCharacters.concat(numbersArray);
    } 

    if(lower === true){
      possCharacters = possCharacters.concat(lowerNumArray);
    } 

    if(upper === true){
      possCharacters = possCharacters.concat(upperNumArray);
    } 

    for(var i=0; i<length; i++){
     var element = getRandom(possCharacters);
     password.push(element);
    }

    return password.join("");
  }

function getRandom(arr){
  var rand = Math.floor(Math.random() * arr.length)
  var randElement = arr[rand];
  return randElement;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//for loop replaying length number of times
//how to only go through for the ones that they want
//random number generator to determine which type of thing to go through
//maybe a counter for types and it'll split i