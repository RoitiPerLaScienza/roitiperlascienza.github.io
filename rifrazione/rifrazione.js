let m = 0;
let x = 0;
let y = 0;
let tx = 0;
let ty = 0;
let n1 = 0;
let n2 = 0;
let AB = 0;
let BC = 0;
let AC = 0;
let Rangle = 0;
let Dangle = 0;
let Nangle = 0;
let Langle = 0;
let check;
let V1;
let W1;
let B1;
let O1;
let D1;
let A1;
let V2;
let W2;
let B2;
let O2;
let D2;
let A2;
let font;
let screen = 0;
function preload(){
    check = true;
    font=loadFont("rifrazione/data/CaviarDreams.ttf");
}

function setup(){
    createCanvas(1280, 720);
    background(255);
    y=400;
    x=0;
    tx=width / 2;
    frameRate(60);
    textFont(font, 20);
    V1=new Pulsante(50, 80, 50, 50, loadImage("rifrazione/data/vetro.png"));
    W1=new Pulsante(110, 80, 50, 50, loadImage("rifrazione/data/acqua.png"));
    B1=new Pulsante(170, 80, 50, 50, loadImage("rifrazione/data/bromo.png"));
    O1=new Pulsante(230, 80, 50, 50, loadImage("rifrazione/data/olio.png"));
    D1=new Pulsante(290, 80, 50, 50, loadImage("rifrazione/data/diamante.png"));
    A1=new Pulsante(350, 80, 50, 50, loadImage("rifrazione/data/aria.png"));
    V2=new Pulsante(50, 480, 50, 50, loadImage("rifrazione/data/vetro.png"));
    W2=new Pulsante(110, 480, 50, 50, loadImage("rifrazione/data/acqua.png"));
    B2=new Pulsante(170, 480, 50, 50, loadImage("rifrazione/data/bromo.png"));
    O2=new Pulsante(230, 480, 50, 50, loadImage("rifrazione/data/olio.png"));
    D2=new Pulsante(290, 480, 50, 50, loadImage("rifrazione/data/diamante.png"));
    A2=new Pulsante(350, 480, 50, 50, loadImage("rifrazione/data/aria.png"));
}

function draw(){
    background(255);
    if(screen == 0) {
        Menu1();
    }
    if(screen == 1) {
        Menu2();
    }
    if(screen == 2) {
        PrintSup();
        textFont(font, 30);
        text("ANGOLO INCIDENTE =", 20, 30);
        text("ANGOLO RIFRATTO =", 20, 430);
        strokeWeight(3);
        seglength();
        if(mouseY < 400 && mouseIsPressed && !V1.hovered() && !W1.hovered() && !B1.hovered() && !O1.hovered() && !D1.hovered() && !A1.hovered()) {
            line(640, 400, mouseX, mouseY);
            anglecalc();
            newangle();
            angleLimit();
            newretta();
        }
        V1.disegna();
        W1.disegna();
        B1.disegna();
        O1.disegna();
        D1.disegna();
        A1.disegna();
        V2.disegna();
        W2.disegna();
        B2.disegna();
        O2.disegna();
        D2.disegna();
        A2.disegna();
    }
}

function mousePressed(){
    if(V1.clicked()) {
        V1.cliccato=!V1.cliccato;
    }
    if(W1.clicked()) {
        W1.cliccato=!W1.cliccato;
    }
    if(B1.clicked()) {
        B1.cliccato=!B1.cliccato;
    }
    if(O1.clicked()) {
        O1.cliccato=!O1.cliccato;
    }
    if(D1.clicked()) {
        D1.cliccato=!D1.cliccato;
    }
    if(A1.clicked()) {
        A1.cliccato=!A1.cliccato;
    }
    if(V2.clicked()) {
        V2.cliccato=!V2.cliccato;
    }
    if(W2.clicked()) {
        W2.cliccato=!W2.cliccato;
    }
    if(B2.clicked()) {
        B2.cliccato=!B2.cliccato;
    }
    if(O2.clicked()) {
        O2.cliccato=!O2.cliccato;
    }
    if(D2.clicked()) {
        D2.cliccato=!D2.cliccato;
    }
    if(A2.clicked()) {
        A2.cliccato=!A2.cliccato;
    }
    if(V1.cliccato) {
        V1.cliccato=true;
        W1.cliccato=false;
        B1.cliccato=false;
        O1.cliccato=false;
        D1.cliccato=false;
        A1.cliccato=false;
        n1=1.52;
    }
    if(W1.cliccato) {
        V1.cliccato=false;
        W1.cliccato=true;
        B1.cliccato=false;
        O1.cliccato=false;
        D1.cliccato=false;
        A1.cliccato=false;
        n1=1.33;
    }
    if(B1.cliccato) {
        V1.cliccato=false;
        W1.cliccato=false;
        B1.cliccato=true;
        O1.cliccato=false;
        D1.cliccato=false;
        A1.cliccato=false;
        n1=1.661;
    }
    if(O1.cliccato) {
        V1.cliccato=false;
        W1.cliccato=false;
        B1.cliccato=false;
        O1.cliccato=true;
        D1.cliccato=false;
        A1.cliccato=false;
        n1=1.46;
    }
    if(D1.cliccato) {
        V1.cliccato=false;
        W1.cliccato=false;
        B1.cliccato=false;
        O1.cliccato=false;
        D1.cliccato=true;
        A1.cliccato=false;
        n1=2.41;
    }
    if(A1.cliccato) {
        V1.cliccato=false;
        W1.cliccato=false;
        B1.cliccato=false;
        O1.cliccato=false;
        D1.cliccato=false;
        A1.cliccato=true;
        n1=1.0003;
    }
    if(V2.cliccato) {
        V2.cliccato=true;
        W2.cliccato=false;
        B2.cliccato=false;
        O2.cliccato=false;
        D2.cliccato=false;
        A2.cliccato=false;
        n2=1.52;
    }
    if(W2.cliccato) {
        V2.cliccato=false;
        W2.cliccato=true;
        B2.cliccato=false;
        O2.cliccato=false;
        D2.cliccato=false;
        A2.cliccato=false;
        n2=1.33;
    }
    if(B2.cliccato) {
        V2.cliccato=false;
        W2.cliccato=false;
        B2.cliccato=true;
        O2.cliccato=false;
        D2.cliccato=false;
        A2.cliccato=false;
        n2=1.661;
    }
    if(O2.cliccato) {
        V2.cliccato=false;
        W2.cliccato=false;
        B2.cliccato=false;
        O2.cliccato=true;
        D2.cliccato=false;
        A2.cliccato=false;
        n2=1.46;
    }
    if(D2.cliccato) {
        V2.cliccato=false;
        W2.cliccato=false;
        B2.cliccato=false;
        O2.cliccato=false;
        D2.cliccato=true;
        A2.cliccato=false;
        n2=2.41;
    }
    if(A2.cliccato) {
        V2.cliccato=false;
        W2.cliccato=false;
        B2.cliccato=false;
        O2.cliccato=false;
        D2.cliccato=false;
        A2.cliccato=true;
        n2=1.0003;
    }
}

function Menu1(){
    background(128, 255, 80);
    fill(203, 50, 52);
    textFont(font, 50);
    text("Scegli il primo materiale", 300, 200);
    fill(0);
    text("1: VETRO", 420, 280);
    text("2: ACQUA", 420, 330);
    text("3: BROMO", 420, 380);
    text("4: OLIO", 420, 430);
    text("5: DIAMANTE", 420, 480);
    text("6: ARIA", 420, 530);
    if(keyIsPressed) {
        if(key == '1') {
            n1=1.52;
            screen=1;
            check=false;
        }
        if(key == '2') {
            n1=1.33;
            screen=1;
            check=false;
        }
        if(key == '3') {
            screen=1;
            n1=1.661;
            check=false;
        }
        if(key == '4') {
            screen=1;
            n1=1.46;
            check=false;
        }
        if(key == '5') {
            screen=1;
            n1=2.41;
            check=false;
        }
        if(key == '6') {
            screen=1;
            n1=1.0003;
            check=false;
        }
    }
}

function Menu2(){
    background(128, 255, 80);
    fill(203, 50, 52);
    textFont(font, 50);
    text("Scegli il secondo materiale", 300, 200);
    fill(0);
    text("1: VETRO", 420, 280);
    text("2: ACQUA", 420, 330);
    text("3: BROMO", 420, 380);
    text("4: OLIO", 420, 430);
    text("5: DIAMANTE", 420, 480);
    text("6: ARIA", 420, 530);
    if(keyIsPressed && check) {
        if(key == '1') {
            n2=1.52;
            screen=2;
        }
        if(key == '2') {
            n2=1.33;
            screen=2;
        }
        if(key == '3') {
            screen=2;
            n2=1.661;
        }
        if(key == '4') {
            screen=2;
            n2=1.46;
        }
        if(key == '5') {
            screen=2;
            n2=2.41;
        }
        if(key == '6') {
            screen=2;
            n2=1.0003;
        }
    }
    else if(keyIsPressed) {
    }
    else {
        check=true;
    }
}

function PrintSup(){
    textFont(font, 30);
    if(n1 == 1.52) {
        background(220, 235, 211);
        fill(0);
        text("MEZZO 1", 1030, 30);
        text("VETRO (n=1.52)", 1000, 70);
        noFill();
    }
    else if(n1 == 1.33) {
        background(0, 0, 255);
        fill(0);
        text("MEZZO 1", 1030, 30);
        text("ACQUA (n=1.33)", 1000, 70);
        noFill();
    }
    else if(n1 == 1.661) {
        background(161, 37, 3);
        fill(0);
        text("MEZZO 1", 1030, 30);
        text("BROMO (n=1.661)", 1000, 70);
        noFill();
    }
    else if(n1 == 1.46) {
        background(24, 74, 4);
        fill(0);
        text("MEZZO 1", 1030, 30);
        text("OLIO (n=1.46)", 1000, 70);
        noFill();
    }
    else if(n1 == 2.41) {
        background(217, 250, 243);
        fill(0);
        text("MEZZO 1", 1030, 30);
        text("DIAMANTE (n=2.41)", 960, 70);
        noFill();
    }
    else if(n1 == 1.0003) {
        background(128, 255, 255);
        fill(0);
        text("MEZZO 1", 1030, 30);
        text("ARIA (n=1.0003)", 1000, 70);
        noFill();
    }
    if(n2 == 1.52) {
        fill(220, 235, 211);
        rect(x, y, 1280, 320);
        fill(0);
        text("MEZZO 2", 1030, 430);
        text("VETRO (n=1.52)", 1000, 470);
        noFill();
    }
    else if(n2 == 1.33) {
        fill(0, 0, 255);
        rect(x, y, 1280, 320);
        fill(0);
        text("MEZZO 2", 1030, 430);
        text("ACQUA (n=1.33)", 1000, 470);
        noFill();
    }
    else if(n2 == 1.661) {
        fill(161, 37, 3);
        rect(x, y, 1280, 320);
        fill(0);
        text("MEZZO 2", 1030, 430);
        text("BROMO (n=1.661)", 1000, 470);
        noFill();
    }
    else if(n2 == 1.46) {
        fill(24, 74, 4);
        rect(x, y, 1280, 320);
        fill(0);
        text("MEZZO 2", 1030, 430);
        text("OLIO (n=1.46)", 1000, 470);
        noFill();
    }
    else if(n2 == 2.41) {
        fill(217, 250, 243);
        rect(x, y, 1280, 320);
        fill(0);
        text("MEZZO 2", 1030, 430);
        text("DIAMANTE (n=2.41)", 960, 470);
        noFill();
    }
    else if(n2 == 1.0003) {
        fill(128, 255, 255);
        rect(x, y, 1280, 320);
        fill(0);
        text("MEZZO 2", 1030, 430);
        text("ARIA (n=1.0003)", 1000, 470);
        noFill();
    }
    for(ty=0;ty < 720;ty+=30) {
        line(tx, ty, tx, ty + 15);
    }
}

function seglength(){
    AB=dist(640, mouseY, 640, 400);
    BC=dist(640, 400, mouseX, mouseY);
    AC=dist(mouseX, mouseY, 640, mouseY);
    console.log("ab=", AB);
    console.log("bc=", BC);
    console.log("ac=", AC);
}

function anglecalc(){
    Rangle=asin(AC / BC);
    Dangle=degrees(Rangle);
    console.log("angolo1=", Dangle);
    textFont(font, 30);
    text(Dangle, 340, 30);
    if(mouseX < 640 && mouseY < 400) {
        m=abs(tan(radians(270) + Rangle));
        fill(255, 255, 0);
        arc(640, 400, 100, 100, radians(270), radians(270) + Rangle, PIE);
        line(640, 400, 1280, 400 - m * 680);
        fill(255, 0, 0);
        arc(640, 400, 100, 100, radians(270) - Rangle, radians(270), PIE);
        noFill();
    }
    else if(mouseX > 640 && mouseY < 400) {
        m=abs(tan(radians(270) - Rangle));
        fill(255, 255, 0);
        arc(640, 400, 100, 100, radians(270) - Rangle, radians(270), PIE);
        line(640, 400, 0, 400 - m * 680);
        fill(255, 0, 0);
        arc(640, 400, 100, 100, radians(270), radians(270) + Rangle, PIE);
        noFill();
    }
}

function newangle(){
    Nangle=(asin((n1 * sin(Rangle)) / n2));
    console.log("angolo2=", degrees(Nangle));
    textFont(font, 30);
    fill(0);
    text(degrees(Nangle), 330, 430);
    noFill();
}

function newretta(){
    m=tan(abs(Nangle - HALF_PI));
    if(mouseX == 640) {
        line(640, 400, 640, 720);
    }
    else if(mouseY < 400 & mouseX < 640) {
        fill(255, 0, 0);
        arc(640, 400, 100, 100, abs(Nangle - HALF_PI), radians(90), PIE);
        noFill();
        line(640, 400, 1280, 400 + (m * 640));
    }
    else if(mouseY < 400 & mouseX > 640) {
        fill(255, 0, 0);
        arc(640, 400, 100, 100, radians(90), abs(Nangle + HALF_PI), PIE);
        noFill();
        line(640, 400, 0, 400 + (m * 640));
    }
    noFill();
}

function angleLimit(){
    Langle=asin(n2 / n1);
    if(Rangle > Langle) {
        m=tan(HALF_PI - Rangle);
        console.log("angolo rifratto inesistente");
        textFont(font, 30);
        fill(255, 0, 0);
        text(" INESISTENTE", 330, 430);
        noFill();
        if(mouseY < 400 && mouseX < 640) {
            fill(255, 0, 0);
            arc(640, 400, 100, 100, radians(270), abs(radians(270) + Rangle), PIE);
            noFill();
            line(640, 400, 1280, 400 - m * 680);
        }
    else if(mouseY < 400 && mouseX > 640) {
            fill(255, 0, 0);
            arc(640, 400, 100, 100, abs(radians(270) - Rangle), radians(270), PIE);
            noFill();
            line(640, 400, 0, 400 - m * 680);
        }
    }
}

class Pulsante{
    constructor(x, y, w, h, img){
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.cr = 0;
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.cr=8.0;
        this.img=img;
    }

    disegna(){
        if(this.cliccato) fill(120);
    else fill(200);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h, this.cr);
        rectMode(CORNER);
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.w * 0.9, this.h * 0.9);
        imageMode(CORNER);
    }

    clicked(){
        return this.hovered() && mouseIsPressed;
    }

    hovered(){
        let mx = mouseX;
        let my = mouseY;
        return (mx > this.x - this.w / 2 && mx < this.x + this.w / 2) && (my > this.y - this.h / 2 && my < this.y + this.h / 2);
    }

}
