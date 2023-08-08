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


// Length Function
function getLength(){
  let chosenLength = prompt("Choose number of characters in password (must be between 8 and 128 characters).");
  let parsedInput = parseFloat(chosenLength)
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


// Character Inclusion Functions
let masterArray = {
  array: [],
  components: [],
  add: function(input){
    this.array = this.array.concat(input.array);
    this.components.push(input);
  
  },
  clear: function(){
    this.array =[];
    this.components=[];
  }

};

class chars {
  constructor(array, label){
    this.array = array;
    this.label = label;
  }
};

class letters{
  constructor(label){
    this.array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.label = label;
  }
};

const lowers = new letters("Lowercase letters?");
const uppers = new letters("Uppercase letters?");
const nums = new chars(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], "Numbers?");
const symbs = new chars(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?"], "Symbols?");

function masterCompiler(){
  let charset = [lowers, uppers, nums, symbs];
  for (let i=0; i<charset.length; i++){
    if (confirm(charset[i].label)){
      masterArray.add(charset[i]);
    };
  };
  return
};

function coinflip(){
  let coin = Math.floor(Math.random()*2);
  if (coin>0){
    return true
  } else {
    return false
  }
}

function getCharacter(){
  let choice = masterArray.array[Math.floor(Math.random()*masterArray.array.length)];
  if (lowers.array.includes(choice)){
    if (masterArray.components.includes(uppers)){
      let outcome = coinflip()
      if (outcome){
        return choice.toUpperCase()
      } else {
        return choice;
      };
    } else {
      return choice;
    };
  } else {
    return choice;
  };
   
};


// Repeater Functions

let isRepeat = true;
let isRepeatAdjascent = true;

function repeater (length){
  if (!confirm("Enable repeated characters?")){
    if (confirm("Disable repeated characters: \n Entire Password[OK] \n Only adjascent Characters[Cancel]")){
      if (length>masterArray.array.length){
        window.alert("ERROR: PASSWORD LENGTH EXCEEDS AVAILABLE CHARACTERS.");
        repeater()
      } else {
        isRepeat = false;
      };

    } else {
      isRepeatAdjascent = false;
    };
  };
  return;
};

function repeaterCheck(str, char){
  if (!isRepeat){
    if (str.includes(char)){
      return false;
    };
  } else if (!isRepeatAdjascent){
    if (str.slice(-1)===char){
      return false;
    };
  }
  return true;
  
};