// Assignment code here
let generatePassword = function() {
  // change h2 text once password is generated
  let passwordText = document.querySelector(".card-header");
  let char = 20; //characters 8-128
  let lower = false; //lower characters
  let upper = false; //upper characters
  let numeric = false; //numeric characters
  let special = false; //special characters

//input the number of password characters
  do {

    if (char !=20 ) {
      alert("Invalid input for length - enter 8 to 128");
    };
    char = parseInt(prompt ("How many characters in your password?", "8-128"),10);

  } while ((char < 8) || (char > 128) || (char !== char));

//input the number of lower characters
  do {
 
    lower = confirm ("Would you like the lower characters in your password?");
    upper = confirm("Would you like the upper characters in your password?");
    numeric = confirm("Would you like the numeric characters in your password?");
    special = confirm("Would you like special characters in your password?");
    if (!(lower || upper || numeric || special)) {
      alert("Invalid input - you have selected no characters to be included in your password. Let's try again!");
    };

} while (!(lower || upper || numeric || special));

//change the box heading that the password has been generated
  passwordText.children[0].textContent = "Generated Password";

//return the password
  return "password-placeholder";
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
