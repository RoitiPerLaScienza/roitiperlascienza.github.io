let click = 0;
let MAX_CLICK = 7;
function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(50, 50, 50);
    fill(128, 255, 128);
    frattale(new p5.Vector(0, 600), new p5.Vector(800, 600), new p5.Vector(400, 0), click, 0);
    fill(255);
    text("Clicca per continuare", 103, 100);
    text("Click: " + click, 135, 130);
}

function mousePressed() {
    if(click >= MAX_CLICK) {
        click=0;
    }
    else {
        click++;
    }
}

function frattale(lowerLeft, lowerRight, topCenter, maxClick, curClick){
    if(curClick < maxClick) {
        let middleLeft = new p5.Vector(lowerLeft.x + (topCenter.x - lowerLeft.x) / 2, lowerLeft.y + (topCenter.y - lowerLeft.y) / 2);
        let middleRight = new p5.Vector(lowerRight.x + (topCenter.x - lowerRight.x) / 2, lowerRight.y + (topCenter.y - lowerRight.y) / 2);
        let bottomCenter = new p5.Vector(lowerLeft.x + (lowerRight.x - lowerLeft.x) / 2, lowerLeft.y);
        let newClick = curClick + 1;
        frattale(middleLeft, middleRight, topCenter, maxClick, newClick);
        frattale(lowerLeft, bottomCenter, middleLeft, maxClick, newClick);
        frattale(bottomCenter, lowerRight, middleRight, maxClick, newClick);
    }
    else {
        triangle(lowerLeft.x, lowerLeft.y, lowerRight.x, lowerRight.y, topCenter.x, topCenter.y);
    }
}

let click = 0;
let MAX_CLICK = 7;
function setup(){
    createCanvas(800, 600);
    background(50, 50, 50);
}

function draw(){
    fill(50, 50, 50);
    noStroke();
    rect(0, 0, 250, 200);
    stroke(128, 255, 128);
    noFill();
    frattale(width / 2, height / 2, 300, click, 0);
    fill(255);
    if(click < MAX_CLICK) {
        text("Clicca per continuare", 103, 100);
        text("Click: " + click, 135, 130);
    }
    else text("Clicca per rincominciare", 115, 130);
}

function mousePressed(){
    if(click >= MAX_CLICK) {
        click=0;
    }
    else {
        click++;
    }
}

function frattale(x, y, d, maxClick, curClick){
    if(curClick < maxClick) {
        let newClick = curClick + 1;
        frattale(x + d / 2, y, d / 2, maxClick, newClick);
        frattale(x - d / 2, y, d / 2, maxClick, newClick);
    }
    else {
        ellipse(x, y, d, d);
    }
    if(click == 7) {
        background(50, 50, 50);
    }
}
