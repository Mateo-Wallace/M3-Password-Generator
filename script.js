// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("#password").value = password;
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

  // changes value of length to a number
  var numLength = Number(length);

  alert('You chose: ' + length);

  // checks choices for character options
  var lowerCase = confirm('Do you want your password to include lower case letters?');
  var upperCase = confirm('Do you want your password to include upper case letters?');
  var numeric = confirm('Do you want your password to include numbers?');
  var specialChar = confirm('Do you want your password to include special characters? \nEx: ?, !, @');
  alert('You chose the following options: \n Lower Case Letters: ' + lowerCase + '\n Upper Case Letters: ' + upperCase + '\n Numbers: ' + numeric + '\n Special Characters: ' + specialChar);

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
        alert('You chose the following options: \n Lower Case Letters: ' + lowerCase + '\n Upper Case Letters: ' + upperCase + '\n Numbers: ' + numeric + '\n Special Characters: ' + specialChar);
    } 
  }

  // string compilation for available choices for characters
  if (specialChar) {
    specialChar = '?!.@$#-_ ,:;<>%&*()=+'
  } else {
    specialChar = ''
  }
  
  if (numeric) {
    numeric = '123456789'
  } else {
    numeric = ''
  }
  
  if (upperCase) {
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else {
    upperCase = ''
  }
  
  if (lowerCase) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  } else {
    lowerCase = ''
  }
  
  // Adds all selected choices into one large array with available password characters
  var grandString = specialChar.concat(numeric, upperCase, lowerCase);
  
  // creates final password by randomizing through each item in the string
  var randomNumber = '';
  for (var i = 0; i < numLength; i++) {
    randomNumber += grandString[Math.floor(Math.random() * grandString.length)];
  } 
  return randomNumber;
}
