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

// ########################################################################################################################
// New Code Below

// function defining generatePassword
function generatePassword() {
  alert ('As you go through these pop-ups. Please fill out your password criteria.')

  // Defines length value
  var length = prompt ('Choose the length of your password.\nMust be at least 8 characters.\nMust not exceed 128 characters.');

  // checks to make sure length is between 7 and 129
  var isInvalid = true;
  while (isInvalid) {
      if (length > 7 && length < 129){
          isInvalid = false;
      } else {
          alert('Your input was invalid. Try again.');
          length = prompt('Choose the length of your password.\nMust be at least 8 characters.\nMust not exceed 128 characters.');
      } 
  }

  alert('You chose: ' + length);

  // checks choices for character options
  var lowerCase = confirm('Do you want your password to include lower case letters?');
  var upperCase = confirm('Do you want your password to include upper case letters?');
  var numeric = confirm('Do you want your password to include numbers?');
  var specialChar = confirm('Do you want your password to include special characters? \nEx: ?, !, @');

  alert('You chose the following options: \nlowercase: ' + lowerCase + '\nupper case: ' + upperCase + '\nnumbers: ' + numeric + '\nspecial character: ' + specialChar);

  // Validation that at least one item was selected 
  var isInvalid2 = true;
  while(isInvalid2) {
    if (lowerCase == true  || upperCase == true || numeric == true || specialChar == true){
        isInvalid2 = false;
    } else {
        alert('Your input was invalid. \nAt least one character option must be selected. \nTry again.');
        lowerCase = confirm('Do you want your password to include lower case letters?');
        upperCase = confirm('Do you want your password to include upper case letters?');
        numeric = confirm('Do you want your password to include numbers?');
        specialChar = confirm('Do you want your password to include special characters? \nEx: ?, !, @');
    } 
  }

  // array compilation for available choices for characters
  if (specialChar) {
    specialChar = ['?', '!', '.', '@', '$', '#']
  } else {
    specialChar = []
  }
  
  if (numeric) {
    numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  } else {
    numeric = []
  }
  
  if (upperCase) {
    upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  } else {
    upperCase = []
  }
  
  if (lowerCase) {
    lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  } else {
    lowerCase = []
  }
  
  // Adds all selected choices into one large array with available password characters
  var grandArray = specialChar.concat(numeric, upperCase, lowerCase);
  alert('Array: ' + grandArray.length);
  
}





