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
