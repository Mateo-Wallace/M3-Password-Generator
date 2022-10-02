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
  var inValid = true;
  while (inValid) {
    var passwordLength = Number(prompt('How many characters would you like your password to be?\nMust be more than 8 characters.\nMust be less than 128 characters.'));
    if (passwordLength > 7 && passwordLength < 129) {
      inValid = false;
    } else if (passwordLength == 0) {
      Window.close()
    } else {
      alert ('Input invalid. Please try again.');
    }
  }
  alert('You chose the length of your password to be:\n' + passwordLength + ' characters.\n\nYou will now choose if your password will contain numbers, special character, upper case, and lower case characters.\nPlease choose at least 1 option.');

  // User choice of character type and validation that at least one choice is true
  while (!inValid) {
    var lowerCase = confirm('Would you like your password to include: \nLower Case letters?');
    var upperCase = confirm('Would you like your password to include: \nUpper Case letters?');
    var numeric = confirm('Would you like your password to include: \nNumbers?');
    var special = confirm('Would you like your password to include: \nSpecial Characters? \nEx: ?, !, >');
    alert('You chose: \n Lower Case Letters: ' + lowerCase + '\n Upper Case Letters: ' + upperCase + '\n Numbers: ' + numeric + '\n Special Characters: ' + special);
    if (lowerCase == true || upperCase == true || numeric == true || special == true) {
      inValid = true;
    } else {
      alert('At least one character type must be selected. Please try again');
    }
  }
  
  // Defines available password characters based on user input
  if (lowerCase == true) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  } else {
    lowerCase = ''
  } if (upperCase == true) {
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else {
    upperCase = ''
  } if (numeric == true) {
    numeric = '123456789'
  } else {
    numeric = ''
  } if (special == true) {
    special = ' ~`!@#$%^&*()-+={}[]|/:;<>,.?'
  } else {
    special = ''
  }

  // Merges strings of all chosen options
  var grandString = special.concat(lowerCase, upperCase, numeric);


  return grandString;
}

// add rng 
// add values to check
// add confirmation 