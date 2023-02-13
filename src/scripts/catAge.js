document
  .getElementById("script-select")
  .addEventListener("change", function () {
    // Remove any existing script tags
    let oldScripts = document.querySelectorAll("script");
    for (let i = 0; i < oldScripts.length; i++) {
      if (oldScripts[i].src) {
        oldScripts[i].parentNode.removeChild(oldScripts[i]);
      }
    }

    // Get the birth year of the cat from the user
    let birthYear = parseInt(prompt("Enter the birth year of the cat:"));

    // Validate the input
    if (!birthYear || isNaN(birthYear)) {
      alert("Please enter a valid year.");
      return;
    }

    // Calculate the cat's age in human years
    let calculateCatAge = function (birthYear) {
      let currentYear = new Date().getFullYear();

      // The first two years of a cat's life count as 21 human years each
      if (currentYear - birthYear <= 2) {
        return 21 * (currentYear - birthYear);
      }
      // Each year following equates to 4 human years
      return 21 + 4 * (currentYear - birthYear - 2);
    };

    // Floor the result
    let catAge = Math.floor(calculateCatAge(birthYear));

    // Display the result to a div with the class "result"
    let resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "The cat's age in human years is: " + catAge;
  });
