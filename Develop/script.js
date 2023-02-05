// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of password characters
var letterUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericChar = ["1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","?","&","*","(",")","_"]; 

//Present user with prompts based on password criteria
//Enter password length between 8-128 characters, present error alert if longer or shorter
function generatePassword() {
  var confirmLength = prompt("Please choose the length of your password (must be between 8 and 128 characters)");

  if (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password must be between 8 and 128 characters");
   return;
  }

    //Gather info on remaining criteria
  var addLetterUpper = confirm("Would you like your password to contain uppercase letters?");
  var addLetterLower = confirm("Would you like your password to contain lowercase letters?");
  var addNumericChar = confirm("Would you like your password to contain numbers?");
  var addSpecialChar = confirm("Would you like your password to contain special characters? Options include: ! @ # $ % ? & * ( ) _");

  //ensure at least one criteria is chosen
  while (addLetterUpper === false && addLetterLower === false && addNumericChar === false && addSpecialChar === false) {
    alert("You must choose at least one of the following criteria: uppercase letter, lowercase letter, number, special character");
    var addLetterUpper = confirm("Would you like your password to contain uppercase letters?");
    var addLetterLower = confirm("Would you like your password to contain lowercase letters?");
    var addNumericChar = confirm("Would you like your password to contain numbers?");
    var addSpecialChar = confirm("Would you like your password to contain special characters? Options include: ! @ # $ % ? & * ( ) _");
  }
    
  //validate user choices with if statements, randomly choose value from arrays and add to password
  //need to fix?
    var approvedCriteria = "";

    if (addLetterUpper === true) {
      approvedCriteria = approvedCriteria.concat(letterUpper);
    } if (addLetterLower === true) {
      approvedCriteria = approvedCriteria.concat(letterLower);
    } if (addNumericChar === true) {
      approvedCriteria = approvedCriteria.concat(numericChar);
    } if (addSpecialChar === true) {
      approvedCriteria = approvedCriteria.concat(specialChar);
    }
    console.log(approvedCriteria);

    var finalPassword = "";

    //for loop to get final password
    for (let index = 0; index < confirmLength; index++) {
      //finalPassword = finalPassword + approvedCriteria[Math.floor(math.random() * approvedCriteria.length)];
      var randomize = Math.floor(Math.random() * approvedCriteria.length);
      finalPassword =+ approvedCriteria[randomize];
    }

    return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
