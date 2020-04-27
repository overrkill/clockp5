let min,hr,sec;

let col=[200,70,156];
function setup(){
  let canvas = createCanvas(400,400);
  canvas.parent('sketch');
 noFill();
  canvas.strokeWeight(10);
angleMode(DEGREES)
colorMode(HSB);
console.log(col);
 }
 function draw(){
   translate(200,200);
   rotate(-90);
   min=map(minute(),0,60,0,360);
   sec=map(second(),0,60,0,360);
   hr=map(hour(),0,60,0,360);
   background("#5d5d5a");
   stroke("#ffa45c");



   arc(0,0,390,390,0,sec);
   stroke("#ffcdab");
   arc(0,0,300,300,0,min);
   stroke("#fff4e3");
   arc(0,0,210,210,0,hr);
   push();
   rotate(sec)
   stroke("#ffa45c");
   line(0,0,150,0);
   pop();
   push();
   rotate(min)
   stroke("#ffcdab");
   line(0,0,80,0);
   pop();
   push();
   rotate(hr)
   stroke("#fff4e3");
   line(0,0,50,0);
   pop();
   noStroke();
   push();
   fill(255);
   ellipse(0,0,20);
   pop();
 }
