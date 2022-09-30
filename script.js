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

// #########################################################
// New Code Below

// function defining generatePassword
function generatePassword() {
  alert ('As you go through these pop-ups. Please fill out your password criteria.')

  // Defines length value
  var length = prompt ('Choose the length of your password.\nMust be at least 8 characters.');

  var isInvalid = true;
  while (isInvalid) {
      if (length > 7 && length < 129){
          isInvalid = false;
      } else {
          alert('Your input was invalid. Try again.');
          length = prompt('Choose the length of your password.\nMust be at least 8 characters.');
      } 
  }

  alert('You chose: ' + length);

  // lower case
  var lowerCase = confirm('Do you want your password to include lower case letters?');
  if (lowerCase) {
    lowerCase = ['a', 'b']
  } else {
    lowerCase = null
  }

  // upper case
  var upperCase = confirm('Do you want your password to include upper case letters?');
  if (upperCase) {
    upperCase = ['A', 'B']
  } else {
    upperCase = null
  }

  // numeric
  var numeric = confirm('Do you want your password to include numbers?');
  if (numeric) {
    numeric = ['1', '2']
  } else {
    numeric = null
  }

  // special characters
  var specialChar = confirm('Do you want your password to include special characters? \nEx: ?, !, @');
  if (specialChar) {
    specialChar = ['?', '!']
  } else {
    specialChar = null
  }

  // Need to complete 
  // Validation that at least one item was selected 
  // var isInvalid = true;
  // while (isInvalid) {
  //     if (lowerCase[0] === 'a'  || upperCase[0] === 'A' || numeric[0] === '1' || specialChar[0] === '?'){
  //         isInvalid = false;
  //     } else {
  //         alert('Your input was invalid. Try again.');
  //         generatePassword();
  //     } 
  // }

}





