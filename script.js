// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// New Code Below this line ##############################################################################################

function generatePassword() {
  alert ('Follow the following commands in order to generate your random password.');

  // User input for password length and validation for a number between specified values
  var passwordLength = Number(prompt('How many characters would you like your password to be?\nMust be more than 8 characters.\nMust be less than 128 characters.'));
  var inValid = true;
  while (inValid) {
    if (passwordLength > 7 && passwordLength < 129) {
      inValid = false;
    } else {
      alert ('Input invalid. Please try again.')
      passwordLength = Number(prompt('How many characters would you like your password to be?\nMust be more than 8 characters.\nMust be less than 128 characters.'));
    }
  }
  alert('You chose the length of your password to be:\n' + passwordLength + ' characters.')







  return passwordLength;
}

// add rng 
// add values to check
// add confirmation 