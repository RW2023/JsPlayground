// Get the current year
const currentYear = new Date().getFullYear();

// Get the birth year of the cat from the user
const birthYear = parseInt(prompt("Enter the birth year of the cat:"));

// Calculate the cat's age in human years
const calculateCatAge = function (birthYear) {
  // The first two years of a cat's life count as 21 human years each
  if (currentYear - birthYear <= 2) {
    return 21 * (currentYear - birthYear);
  }
  // Each year following equates to 4 human years
  return 21 + 4 * (currentYear - birthYear - 2);
};

// Floor the result
const catAge = Math.floor(calculateCatAge(birthYear));

// Display the result to a div with the class "result"
const resultDiv = document.querySelector(".result");
resultDiv.innerHTML = "The cat's age in human years is: " + catAge;
