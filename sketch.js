let player;
let bgimg;
let obsimg;
let obstacles = [];
let wordclassfier;
function preload() {
  bgimg = loadImage("backe.jpg");
  playerimg = loadImage("player.png");
  obsimg = loadImage("obs.png");
  let options = {
    probabilitythreshold: 0.85,
  };
  wordclassfier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 500);
  player = new Player();
  wordclassfier.classify(heardword);
}
function heardword(error, results) {
  console.log(results[0].label);
  if (results[0].label === "up") {
    player.jump();
  }
}

function draw() {
  background(bgimg);
  player.show();
  player.move();

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      textSize(37);
      text("you lose😭,tray agin😇", 10, 30);
      noLoop();
    }
  }
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
