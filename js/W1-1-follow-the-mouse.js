"use strict";

//Draw a line which follow your mouse pointer from the center of the screen
//Check https://p5js.org/reference/ on how to access mouse data

const w = 800;
const h = 800;

function setup() {
    createCanvas(w, h);
    background(200);
    origin = createVector(w / 2, h / 2); //optie 2
}

function draw() {
    background(200);
    // optie 1
    let m = createVector(mouseX, mouseY);
    let center = createVector(w / 2, h / 2);
    //console.log(m, center);
    m.sub(center);
    translate(w / 2, h / 2);
    line(0, 0, m.x, m.y);

    //optie 2
    line(origin.x, origin.y, mouseX, mouseY);
    stroke(50);
    let mouse = createVector(mouseX - 200, mouseY - 200);
    mouse.normalize();
    line(origin, mouse.mult(200));
    stroke(50);
}