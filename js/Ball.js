"use strict";

class Ball {
    constructor(x, y, w, h) {
        this.location = createVector(x, y);
        this.velocity = createVector(1, 1);
        this.acceleration = createVector(0, 0);
        this.w = w;
        this.h = h;
    }

    draw() {
        stroke(0);
        fill(175);
        circle(this.location.x, this.location.y, 50);
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        mouse.sub(this.location.x, this.location.y);
        this.acceleration = mouse;
        this.acceleration.normalize(); //weten welke richting 
        this.acceleration.mult(1);
        this.velocity.limit(10);
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
    }

    edges() {
        if ((this.location.x > this.w) || (this.location.x < 0)) {
            this.velocity = this.velocity.x * -1;
        }
        if ((this.location.y > this.h) || (this.location.y < 0)) {
            this.velocity = this.velocity.y * -1;
        }
    }
}