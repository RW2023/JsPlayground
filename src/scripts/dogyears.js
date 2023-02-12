// select the element with class "result"
const resultDiv = document.querySelector(".result");

// function to calculate the dog's age in human years
const calculateDogAge = function () {
  // get the current year
  const currentYear = new Date().getFullYear();

  // prompt the user to enter the birth year of the dog
  const birthYear = parseInt(prompt("Enter the birth year of the dog:"));

  // calculate the dog's age in human years
  let humanYears = 0;
  if (currentYear - birthYear <= 2) {
    // if the dog is 2 years or younger, use the first formula
    humanYears = (currentYear - birthYear) * 10.5;
  } else {
    // if the dog is older than 2, use the second formula
    humanYears = 2 * 10.5 + (currentYear - birthYear - 2) * 4;
  }

  // update the innerHTML of the result div with the calculated dog's age in human years
  resultDiv.innerHTML = `The dog is ${humanYears} years old in human years.`;
};

// call the function
calculateDogAge();