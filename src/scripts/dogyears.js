document
  .getElementById("script-select")
  .addEventListener("change", function () {
    // Remove any existing script tags
    const oldScripts = document.querySelectorAll("script");
    for (let i = 0; i < oldScripts.length; i++) {
      if (oldScripts[i].src) {
        oldScripts[i].parentNode.removeChild(oldScripts[i]);
      }
    }

    // Add the new script tag
    var selectedScript = this.value;
    var script = document.createElement("script");
    script.src = selectedScript;
    document.body.appendChild(script);
  });
// removes previous script tags
const currentYear = new Date().getFullYear();
const birthYear = parseInt(prompt("Enter the birth year of the dog:"));

const calculateDogAge = function (birthYear) {
  // The first year of a dog's life is equal to 15 human years
  if (currentYear - birthYear <= 1) {
    return 15 * (currentYear - birthYear);
  }
  // Each year following equates to 9 human years
  return 15 + 9 * (currentYear - birthYear - 1);
};

const dogAge = Math.floor(calculateDogAge(birthYear));

const resultDiv = document.querySelector(".result");
resultDiv.innerHTML = "The dog's age in human years is: " + dogAge;
