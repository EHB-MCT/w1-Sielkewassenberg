"use strict";

//Combine your previous sketches
//Create a ball that accelerates towards the mouse
//Make use of a separate 'Ball'-class (Ball.js)

const w = 800;
const h = 800;
let ball;

function setup() { // variabele declarene uit de functie en dan veranderinging in setup
    createCanvas(w, h);
    background(200);
    ball = new Ball(w / 2, h / 2, w, h);
}

function draw() {
    background(200);
    ball.draw();
    ball.update();
}