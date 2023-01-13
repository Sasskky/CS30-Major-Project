// Flaguesser
// Brophy
// 11/17/22
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//#5f8eb9
let button;
let newBackground = "backgroubd2.jpg";

//let background2 = ;

function draw() {
  background("Lightblue");
}

function setup() {
  button = createButton("Start Game!");
  width = 50;
  button.position(935, 580);
  button.mousePressed(switchToGameScreen);
}

function switchToGameScreen() {
  console.log("here");
  createCanvas(displayWidth, displayHeight);
  
  

}

