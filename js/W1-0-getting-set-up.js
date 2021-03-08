"use strict";

//This how you used to code a bouncing ball
//Now rewrite this sketch so it uses vectors.

const w = 800;
const h = 800;

let x = w / 2;
let y = h / 2;
let xSpeed = 5;
let ySpeed = 3;
let loc, velocity;



function setup() {
  let loc = createVector(w / 2, h / 2);
  let speed = createVector(5, 3);
  createCanvas(w, h);
  background(200);
}

function draw() {
  background(200);
  //Update
  edges();
  loc.sub(speed);
  // x += xSpeed;
  //y += ySpeed;

  //Draw
  stroke(0);
  fill(175);
  circle(x, y, 50);
}

function edges() {
  if ((loc.x > w) || (x < 0)) {
    xSpeed = xSpeed * -1;
  }
  if ((loc.y > h) || (y < 0)) {
    ySpeed = ySpeed * -1;
  }


}