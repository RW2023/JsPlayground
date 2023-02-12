// let mom = ('Veronique');
// let dad = ('Ryan');
// let daughter = ('Melanie');
// let son = ('Dominic')

// let familyUnit;

// function defineFamily() {
//   familyUnit = [`${mom}, ${daughter}, ${son}, ${dad}`];
// }
// defineFamily();
// console.log(familyUnit);

// for (let i = 100; i>=0; i-=10){
//   console.log("i")
// }

// function WeightLoss(mass, time){
//   let WeightLoss = `(${mass} * ${time})/${time}`
//   console.log(`you lost ${mass} pounds in ${time} months! Good work`);
// }

let startWeight = parseFloat(prompt("Enter your starting weight (in pounds):"));
let endWeight = parseFloat(prompt("Enter your ending weight (in pounds):"));
let time = parseFloat(prompt("Enter the time elapsed (in months):"));



function weightLoss(startWeight, endWeight, time) {
  let mass = startWeight - endWeight;
  let result = mass / time;
  return `You have lost ${mass} pounds in ${time} month for an average of ${result.toFixed(
    2
  )} pounds per Month!!. Good Job!!`;
}
document.querySelector(".result").innerHTML = `<strong>${weightLoss(
  startWeight,
  endWeight,
  time
)}</strong>`;