// Assignment Code

// Array of special characters to be included in password
var specialCharactersArray = [
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
var lowerCaseLettersArray = [
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
var upperCaseNumbersArray = [
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

//1 prompt checking user 
var length = prompt("How many characters would you like your password to be?");
var special = confirm("Would you like special characters in your password? Press 'Okay' for yes and 'Cancel' for no.")
var numbers = confirm("Would you like numbers in your password? Press 'Okay' for yes and 'Cancel' for no.")
var upper = confirm("Would you like upper case letters in your password? Press 'Okay' for yes and 'Cancel' for no.")
var lower = confirm("Would you like lower case letters in your password? Press 'Okay' for yes and 'Cancel' for no.")

//Set empty array to hold user's password
var password = [];

//array to hold the list off all possible characters as the user chooses them
var possiblePasswordCharacters = [];

//function that uses the users input to create an appropriate password
function generatePassword(){
  
    //if statements that check if the user wants the respective character type and merges that array with the possiblePasswordCharacters array
    if(special === true){
      possiblePasswordCharacters = possiblePasswordCharacters.concat(specialCharactersArray);
    } 

    if(numbers === true){
      possiblePasswordCharacters = possiblePasswordCharacters.concat(numbersArray);
    } 

    if(lower === true){
      possiblePasswordCharacters = possiblePasswordCharacters.concat(lowerCaseLettersArray);
    } 

    if(upper === true){
      possiblePasswordCharacters = possiblePasswordCharacters.concat(upperCaseNumbersArray);
    } 

    //this for loop gets a random element based on the parameters set by the user by using the getRandomElement function and pushes it to password array
    for(var i=0; i<length; i++){
     var element = getRandomElement(possiblePasswordCharacters);
     password.push(element);
    }

    //joins the password array into a string and returns it
    return password.join("");
  }

//this function finds a random number between 0 and the length-1 of the possiblePasswordCharacters array. It then finds and returns the element at that index in the array
function getRandomElement(arr){
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

