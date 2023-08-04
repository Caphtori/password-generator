// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


function getLength(){
  var chosenLength = prompt("Choose number of characters in password (must be between 8 and 128 characters).");
  var parsedInput = parseFloat(chosenLength)
  if (isNaN(parsedInput)){
    window.alert("ERROR: PASSWORD MUST BE A NUMBER.");
    getLength();
  } else if (!Number.isInteger(parsedInput)){
    window.alert("ERROR: PASSWORD MUST BE A WHOLE NUMBER.");
    getLength();
  } else if (parsedInput<8){
    window.alert("ERROR: PASSWORD MUST BE MORE THAN 8 CHARACTERS.");
    getLength();
  } else if (parsedInput>128){
    window.alert("ERROR: PASSWORD MUST BE LESS THAN 128 CHARACTERS.");
    getLength();
  } else {
    // return parsedInput
    window.alert("Your password will be " + parsedInput + " characters long.");
  };

};