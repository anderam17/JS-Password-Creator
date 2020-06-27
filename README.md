# JS-Password-Creator

## Function
The goal of this homework assignment was to create a program that would generate a password given parameters specified by the user. 
The user is first asked how many characters long they would like their password to be.
They are asked in 4 separate prompts if they would like numbers, special characters, lower case letters, or upper case letters.
The program then creates a password that is the length the user wants using the characters the user wants. 
The password is random every time.

## Method
I created 4 array elements containing all numbers, special characters, lower case letters, and upper case letters. 
I then created a prompt to ask the user how many characters they want the password to be and saved the answer in a variable. 
Next, I created 4 confirm pop-ups to check which type of characters the user wants and saved the answers as boolean values. 
I set up two empty arrays, one for the final password and one to store the characters that the user wants to use. 

Next I created a function that first runs through 4 if statements to check the boolean values for each type of character. If the boolean is true, that array is merged into the possible characters array. 
After the if statements are read, the code then enters a for loop that runs through the possible characters array and pushes the element at a random index to the password array. 
The random number is retrieved from a separate function that takes in the possible characters array as an argument and uses Math.random times the length of the array to get a random index within the array. 
It then searches the possible characters array for this element and returns it.

The password array is then joined together and returned as a string.

## Author
 * Allana Anderson - _Initial JS_