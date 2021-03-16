let img;
let bac;
let vet;
let dito;
let oro;
let testo1;
let testo2;
let testo3;
let touchB;
let touchV;
let touchD;
let nearB;
let nearV;
let c = 0;
let k = 0;
let j = 0;
let pposX = 0;
let pposY = 0;

function setup() {
    touchB = false;
    touchV = false;
    touchD = false;
    nearB = false;
    nearV = false;
    createCanvas(1100, 700);
    startObject();
    img=loadImage("data/elettroscopio.png");
}

function draw(){
    background(255, 254, 217);
    resize();
    title();
    stroke(0);
    strokeWeight(1);
    fill(161, 161, 161);
    rect(100, 660, 500, 50);
    display();
    nearB=bac.xB >= 395 && bac.xB <= 510 && bac.yB >= 28 && bac.yB <= 328;
    touchB=bac.xB > 330 && bac.xB < 395 && bac.yB > 120 && bac.yB < 225;
    nearV=vet.xV >= 395 && vet.xV <= 510 && vet.yV >= 28 && vet.yV <= 328;
    touchV=vet.xV > 330 && vet.xV < 375 && vet.yV > 120 && vet.yV < 225;
    touchD=dito.xD > 330 && dito.xD < 395 && dito.yD > 120 && dito.yD < 225;
    if(touchB || touchV) {
        oro.open();
        c++;
    }
    if((nearB && !touchB && mouseIsPressed && mouseX == bac.xB && mouseY == bac.yB && bac.xB < pmouseX) || (nearV && !touchV && mouseIsPressed && mouseX - 40 == vet.xV && mouseY - 20 == vet.yV && vet.xV < pmouseX - 40)) {
        oro.aumenta();
    }
    if(c == 0 && nearB && mouseIsPressed && mouseX == bac.xB && mouseY == bac.yB && bac.xB > pmouseX || (c == 0 && nearV && mouseIsPressed && mouseX - 40 == vet.xV && mouseY - 20 == vet.yV && vet.xV > pmouseX - 40)) {
        oro.diminuisce();
    }
    if(((c == 0 && mouseIsPressed && mouseX == bac.xB && mouseY == bac.yB && bac.xB > pmouseX) && mouseX > 715) || ((c == 0 && mouseIsPressed && mouseX - 40 == vet.xV && mouseY - 20 == vet.yV && vet.xV > pmouseX - 40) && mouseX > 715)) {
        oro.closed();
    }
    if(touchD) {
        oro.closed();
        if(oro.carico) {
            c=0;
        }
    else if(nearB || nearV) {
            k++;
        }
    }
    if(k >= 1 && c == 0 && touchD == false && (nearB == false || nearV == false)) {
        oro.open();
        k=0;
    }
}

function startObject(){
    bac=new Bachelite();
    vet=new Vetro();
    dito=new Dito();
    oro=new Lamine();
}

function resize(){
    img.resize(500, 600);
    image(img, 100, 120);
}

function display(){
    bac.display();
    vet.display();
    oro.display();
    dito.display();
}

function title(){
    testo1="ELETTROSCOPIO";
    fill(0);
    textAlign(CENTER);
    textSize(45);
    text(testo1, width / 2, height / 10);
}

function mouseDragged(){
    if(mouseButton == LEFT_ARROW) {
        if(mouseX >= bac.xB - 40 && mouseX <= bac.xB + 240 && mouseY >= bac.yB - 40 && mouseY <= bac.yB + 250) {
            bac.xB=mouseX;
            bac.yB=mouseY;
        }
    else if(mouseX >= vet.xV - 40 && mouseX <= vet.xV + 240 && mouseY >= vet.yV - 40 && mouseY <= vet.yV + 250) {
            vet.xV=mouseX - 40;
            vet.yV=mouseY - 20;
        }
    }
    else if(mouseButton == RIGHT_ARROW) {
        dito.xD=mouseX - 40;
        dito.yD=mouseY - 20;
    }
}

class Bachelite{
    constructor(){
        this.xB=width - width / 4;
        this.yB=height / 8;
        this.bachelite=loadImage("data/bachelite.png");
    }

    display(){
        this.bachelite.resize(240, 250);
        image(this.bachelite, this.xB, this.yB);
    }

}

class Dito{
    constructor(){
        this.xD=width - width / 3 + 50;
        this.yD=height - height / 4;
        this.dito=loadImage("data/dito.png");
    }

    display(){
        this.dito.resize(280, 140);
        image(this.dito, this.xD, this.yD);
    }

}

class Lamine{
    constructor(){
        this.y2S = 0;
        this.carico = false;
        this.n=3;
        this.x1=362;
        this.y1=571;
        this.x2D=this.x1 + this.n;
        this.x2S=this.x1 - this.n;
        this.y2D=this.y2S=650;
    }

    display(){
        stroke(255, 226, 38);
        strokeWeight(7);
        line(this.x1, this.y1, this.x2D, this.y2D);
        stroke(255, 226, 38);
        strokeWeight(7);
        line(this.x1, this.y1, this.x2S, this.y2S);
    }

    open(){
        this.x2D=this.x1 + 36;
        this.x2S=this.x1 - 36;
        this.y2D=this.y2S=641;
        this.carico=true;
    }

    closed(){
        this.y2D=this.y2S=650;
        this.x2D=this.x1 + 3;
        this.x2S=this.x1 - 3;
        this.carico=false;
    }

    aumenta(){
        this.y2D=this.y2D - 0.02;
        this.y2S=this.y2S - 0.02;
        this.n=this.n + 0.5;
        this.x2D=this.x1 + this.n;
        this.x2S=this.x1 - this.n;
    }

    diminuisce(){
        this.y2D=this.y2D + 0.02;
        this.y2S=this.y2S + 0.02;
        this.n=this.n - 0.7;
        this.x2D=this.x1 + this.n;
        this.x2S=this.x1 - this.n;
    }

}

class Vetro{
    constructor(){
        this.xV=width - width / 4;
        this.yV=height / 3 + 80;
        this.vetro=loadImage("data/vetro.png");
    }

    display(){
        this.vetro.resize(240, 250);
        image(this.vetro, this.xV, this.yV);
    }

}
