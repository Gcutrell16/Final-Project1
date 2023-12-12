let canvasImage;
let SBPArray = [];
let paperArray = [];
let stickerArray = [];
let MSArray = [];
let LDArray = [];


function preload() {
  canvasImage = loadImage('Background/Canvas Image.png');
  SBPArray[0]= loadImage('SBP/SBP 1.png');
  SBPArray[1]= loadImage('SBP/SBP 2.png');
  SBPArray[2]= loadImage('SBP/SBP 3.png');
  SBPArray[3]= loadImage('SBP/SBP 4.png');
  SBPArray[4]= loadImage('SBP/SBP 5.png');
  SBPArray[5]= loadImage('SBP/SBP 6.png');
  SBPArray[6]= loadImage('SBP/SBP 7.png');
  SBPArray[7]= loadImage('SBP/SBP 8.png');
  paperArray[0]= loadImage('Paper/Paper 1.png');
  paperArray[1]= loadImage('Paper/Paper 2.png');
  paperArray[2]= loadImage('Paper/Paper 3.png');
  paperArray[3]= loadImage('Paper/Paper 4.png');
  paperArray[4]= loadImage('Paper/Paper 5.png');
  paperArray[5]= loadImage('Paper/Paper 6.png');
  paperArray[6]= loadImage('Paper/Paper 7.png');
  stickerArray[0]= loadImage('Stickers/Sticker 1.png');
  stickerArray[1]= loadImage('Stickers/Sticker 2.png');
  stickerArray[2]= loadImage('Stickers/Sticker 3.png');
  stickerArray[3]= loadImage('Stickers/Sticker 4.png');
  stickerArray[4]= loadImage('Stickers/Sticker 5.png');
  stickerArray[5]= loadImage('Stickers/Sticker 6.png');
  MSArray[0]= loadImage('MS/MS 1.png');
  MSArray[1]= loadImage('MS/MS 2.png');
  MSArray[2]= loadImage('MS/MS 3.png');
  MSArray[3]= loadImage('MS/MS 4.png');
  MSArray[4]= loadImage('MS/MS 5.png');
  MSArray[5]= loadImage('MS/MS 6.png');
  LDArray[0]= loadImage('LD/LD 1.png');
  LDArray[1]= loadImage('LD/LD 2.png');


}




function setup() {
// when making a parent, it is a function that is expecting a parenthisis/ variable so putting an equal sign or space between confuses the computer and makes it more difficult to execute its function
  
  imageMode(CENTER);
  
  
 var canvas = createCanvas(640, 838);
  canvas.parent('sketch-holder');
  
  
  var button = createImg('buttons/SBP button.png');
  button.size(130,130);
  button.parent('button-holder');
  button.mousePressed(drawSBP);
  
  var button2 = createImg('buttons/Paper button.png');
  button2.size(130,130);
  button2.parent('button-holder');
  button2.mousePressed(drawPaper);

  var button3 = createImg('buttons/Stickers button.png');
  button3.size(130,130);
  button3.parent('button-holder');
  button3.mousePressed(drawSticker);

  
  var button4 = createImg('buttons/MS button.png');
  button4.size(130,130);
  button4.parent('button-holder');
  button4.mousePressed(drawMS);

  
  var button5 = createImg('buttons/LD button.png');
  button5.size(130,130);
  button5.parent('button-holder');
  button5.mousePressed(drawLD);

  
  var button6 = createButton('clear canvas');
  button6.size(130,130);
  button6.parent('button-holder');
  button6.mousePressed(clearCanvas);
  
  var button7 = createImg('buttons/Save Image button.png');
  button7.size(130,130);
  button7.parent('button-holder');
  button7.mousePressed(saveImage);

  
  image(canvasImage,0,0);
  frameRate(60);
  
}

function draw() {
}

function drawSBP () {
  let randSBP = int(random(SBPArray.length));
  image(SBPArray[randSBP], 320,424, 547, 712);
}

//negative numbers and a left leaning number range
function drawPaper () {
  let randPaper = int(random(paperArray.length));
  //image(paperArray[randPaper], int(random(-50,350)),int(random(-50,350)), 680, 820);
    image(paperArray[randPaper], random(width), random(height), 250, 301);

}

function drawSticker () {
  let randSticker = int(random(stickerArray.length));
  image(stickerArray[randSticker],random(width), random(height), 130, 128);
}

function drawMS () {
  let randMS = int(random(MSArray.length));
  image(MSArray[randMS], random(width), random(height), 180, 162);
}

function drawLD () {
  let randLD = int(random(LDArray.length));
  image(LDArray[randLD], random(width), random(height), 640, 660);
}

function clearCanvas () {
  image(canvasImage,0,0);
}

function saveImage() {
  save("Picture.png");
}

