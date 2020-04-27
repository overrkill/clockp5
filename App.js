let min,hr,sec;

let col=[200,70,156];
function setup(){
  let canvas = createCanvas(300,300);
  canvas.parent('sketch');
 noFill();
  canvas.strokeWeight(10);
angleMode(DEGREES)
colorMode(HSB);
console.log(col);
 }
 function draw(){
   translate(150,150);
   rotate(-90);
   min=map(minute(),0,60,0,360);
   sec=map(second(),0,60,0,360);
   hr=map(hour(),0,60,0,360);
   background("#5d5d5a");
   stroke("#ffa45c");
   arc(0,0,290,290,0,sec);
   stroke("#ffcdab");
   arc(0,0,200,200,0,min);
   stroke("#fff4e3");
   arc(0,0,110,110,0,hr);
   push();
   rotate(sec)
   stroke("#ffa45c");
   line(0,0,125,0);
   pop();
   push();
   rotate(min)
   stroke("#ffcdab");
   line(0,0,80,0);
   pop();
   push();
   rotate(hr)
   stroke("#fff4e3");
   line(0,0,40,0);
   pop();
   noStroke();
   push();
   fill(255);
   ellipse(0,0,20);
   pop();
 }
