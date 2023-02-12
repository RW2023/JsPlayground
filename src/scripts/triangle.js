const solveTriangle = function () {
  // parse input from user for the length of side A
  const a = parseFloat(prompt("Enter the length of side A:"));

  // parse input from user for the length of side B
  const b = parseFloat(prompt("Enter the length of side B:"));

  // calculate the length of side C using the Pythagorean theorem
  const c = Math.sqrt(a * a + b * b);

  // format the result to 2 decimal places
  const result = c.toFixed(2);

  // select the div with class "result" to display the results
  const resultDiv = document.querySelector(".result");

  // set the inner HTML of the result div to show the result
  resultDiv.innerHTML = "The length of side C is: " + result;
};

// call the function to solve the triangle
solveTriangle();
