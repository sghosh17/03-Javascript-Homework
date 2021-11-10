
// Assignment Code
var generateBtn = document.querySelector("#generate");

var pass_lenght;
var confirm_no;
var confirm_char;
var confirm_upper;
var confirm_lower;


// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", 
              ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
         "u", "v", "w", "x", "y", "z"];
         

alpha_upper=(alpha.map(function(x){
  return x.toUpperCase();
}));


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";

  var password = generatePassword();
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  var choices;
     // Asks for user input
     pass_lenght = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
     // First if statement for user validation 
    if (!pass_lenght) {
      alert("This needs a value");
  } else if (pass_lenght < 8 || pass_lenght > 128) {
      // Validates user input
      // Start user input prompts
      generatePassword();

  }else {
    // User Input
    confirm_no = confirm("Will this contain numbers?");
    confirm_char = confirm("Will this contain special characters?");
    confirm_upper = confirm("Will this contain Uppercase letters?");
    confirm_lower = confirm("Will this contain Lowercase letters?");
  };

  // Else if all options are false
  if (!confirm_char && !confirm_no && !confirm_upper && !confirm_lower) {
    choices = alert("You must choose a criteria!");

  }
  // Else if all options are true
  else if (confirm_char && confirm_no && confirm_upper && confirm_lower) {

    choices = character.concat(number, alpha, alpha_upper);
    //console.log('Inside 4');
  }

  // Else if any three options are true
  else if (confirm_char && confirm_no && confirm_upper) {
    //console.log('Inside 3');
    choices = character.concat(number, alpha_upper);
  }
  else if (confirm_char && confirm_no && confirm_lower) {
    choices = character.concat(number, alpha);
  }
  else if (confirm_char && confirm_lower && confirm_upper) {
    choices = character.concat(alpha, alpha_upper);
  }
  else if (confirm_no && confirm_lower && confirm_upper) {
    choices = number.concat(alpha, alpha_upper);
  }

  // Else if any two options are true
 else if (confirm_char && confirm_no) {
  //console.log('Inside 2');
    choices = character.concat(number);

  } else if (confirm_char && confirm_lower) {
    choices = character.concat(alpha);

  } else if (confirm_char && confirm_upper) {
    choices = character.concat(alpha_upper);

  }else if (confirm_lower && confirm_no) {
    choices = alpha.concat(number);

  } else if (confirm_lower && confirm_upper) {
    choices = alpha.concat(alpha_upper);

  } else if (confirm_no && confirm_upper) {
    choices = number.concat(alpha_upper);
  }

 // Else if only any one option is true
 else if (confirm_char) {
  choices = character;
}
else if (confirm_no) {
  choices = number;
}
else if (confirm_lower) {
  choices = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirm_upper) {
  //choices = space.concat(alpha_upper);
  choices = alpha_upper;
};

  // Random selection
  var space = [];
  for (var i = 0; i < pass_lenght; i++) {
    
    var choices_random = choices[Math.floor(Math.random() * choices.length)]; //choices.lenght=((max - min)+min)
    space.push(choices_random);
  }
  
// This joins the password array and converts it to a string
    var ps = space.join("");
    console.log(ps);
    return ps;

}
