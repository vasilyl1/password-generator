// Assignment code here

let generatePassword = function() {
  // change h2 text once password is generated
  let passwordText = document.querySelector(".card-header");
  let passwordTextBox = document.querySelector("#password");
  let char = 20; //characters 8-128
  let inputStr = ""; //input string
  let lower = false; //lower characters
  let upper = false; //upper characters
  let numeric = false; //numeric characters
  let special = false; //special characters
  let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericCharacters = "0123456789";
  let specialCharacters = " !\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  let characters = ""; //source for selection
  let password = "";
  
//input the number of password characters
  do {

    if (char !=20 ) {
      alert("Invalid input for length - enter 8 to 128");
    };
    inputStr = prompt ("How many characters in your password?", "8-128");
    char = parseInt (inputStr, 10);

  } while ((char < 8) || (char > 128) || (isNaN(inputStr)));

//input the number of lower characters
  do {
 
    lower = confirm ("Would you like the lower characters in your password? \n (Cancel - No; OK - Yes)");
    upper = confirm("Would you like the upper characters in your password? \n (Cancel - No; OK - Yes)");
    numeric = confirm("Would you like the numeric characters in your password? \n (Cancel - No; OK - Yes)");
    special = confirm("Would you like special characters in your password? \n (Cancel - No; OK - Yes)");
    if (!(lower || upper || numeric || special)) {
      alert("Invalid input - you have selected no characters to be included in your password. Let's try again!");
    };

} while (!(lower || upper || numeric || special));

//prepare the source for selection
if (lower) {
  characters += lowerCharacters;
};
if (upper) {
  characters += upperCharacters;
};
if (numeric) {
  characters += numericCharacters;
};
if (special) {
  characters += specialCharacters;
};

//generate random password using all the input values
//from the source string

for ( let i = 0; i < char; i++ ) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
};

//correct the password if it does not include any of the requested character sets

let checkOccurence = function (password1, characters) {
  let notoccurence = true; //no special symbols occurence in the password flag

    for (let i = 0; ((notoccurence) && (i < characters.length)); i++) {
      notoccurence = (password1.indexOf(characters[i]) == -1);
    };
    // if notoccurence = false then everything is ok, password contains the correct characters
    if (notoccurence) {
      password1[Math.floor(Math.random() * password1.length)] = characters.charAt(Math.floor(Math.random() * characters.length));
    };
    return password1;
};

if (lower) {
  password = checkOccurence(password, lowerCharacters);
};

if (upper) {
  password = checkOccurence(password, upperCharacters);
};

if (numericCharacters) {
  password = checkOccurence(password, numericCharacters);
};

if (specialCharacters) {
  password = checkOccurence(password, specialCharacters);
};

//change the box heading that the password has been generated
  passwordText.children[0].textContent = "Congratulations, your password is printed in the box below. Please store it in a safe place!";

//store the password in the browser 
  passwordTextBox.placeholder = password;
//return the password
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
