"use strict";

//Let's continue with our Bouncing Ball
//Introduce 2 forces: wind and gravity
//Wind is only applied when the mouse is pressed

//Introduce mass
//To check if it works, create 2 instances of your Ball class with different masses.


const w = 800;
const h = 800;
let loc, velocity, acceleration;
let mass = 1;


function setup() {
    createCanvas(w, h);
    background(200);
    loc = createVector(w/2, h/2);
    velocity = createVector(0,0);
    acceleration = createVector(0,0);
}

function draw() {
    background(200);
    let gravity = createVector(0,0.5);
    applyForce(gravity);
    velocity.add(acceleration);
    loc.add(velocity);
    stroke(0);
    fill(175);
    circle (loc.x, loc.y, 50);
}

function applyForce() {
    let f = force.copy();
    // copy: om originele vector niet te bewerken 
    // anders alles op 1 vector toegepast 
    f.div(mass);
    acceleration.add(f);
}