let schermata = 0;
let TestoSpiegazione;
let Simulazione1;
let Simulazione2;
let Pausa;
let Play;
let Play2;
let Pausa2;
let FormuleOndaArmonica;
let FormulePendolo;
let px = 0;
let py = 0;
let px2 = 0;
let py2 = 0;
let proiectionX = 0;
let proiectionY = 0;
let angle = 0;
let angle2 = 0;
let radius = 100;
let frequency = 1.25;
let x = 0;
let cartesianY = 0;
let cartesianX = 0;
let xVel2 = 0;
let yVel2 = 0;
let xAcc2 = 0;
let yAcc2 = 0;
let grafico2;
let accelerazione2;
let velocita;
let coordinate;
let massimo = 0;
let minimo = 0;
let raggio = 0;
let raggio2 = 0;
let Px = 0;
let Py = 0;
let p2x = 0;
let p2y = 0;
let proiectX = 0;
let proiectY = 0;
let freq = 1.25;
let ang2 = 0;
let cateto1 = 0;
let x2 = 0;
let mVel = 50;
let xVel = 0;
let yVel = 0;
let mAcc = 40;
let xAcc = 0;
let yAcc = 0;
let componenteOrizzontalePesoX = 0;
let componenteOrizzontalePesoY = 0;
let moduloPeso = 80;
let moduloComponentePeso = 0;
let proiezione;
let vettore;
let grafico;
let accelerazione;
let peso;
let Comicfont;

function preload(){
    grafico2 = false;
    accelerazione2 = false;
    velocita = false;
    coordinate = false;
    proiezione = false;
    vettore = false;
    grafico = false;
    accelerazione = false;
    peso = false;
    TestoSpiegazione=loadImage("moto_armonico/data/SfondoArmonico.jpg");
    Simulazione1=loadImage("moto_armonico/data/Armonico3.jpg");
    Simulazione2=loadImage("moto_armonico/data/Pendolo.jpg");
    Pausa=loadImage("moto_armonico/data/TastoPausa.png");
    Play=loadImage("moto_armonico/data/TastoPlay.png");
    Play2=loadImage("moto_armonico/data/TastoPlay2.png");
    Pausa2=loadImage("moto_armonico/data/TastoPausa2.png");
    FormuleOndaArmonica=loadImage("moto_armonico/data/FormuleMotoArmonico.PNG");
    FormulePendolo=loadImage("moto_armonico/data/FormulePendolo.PNG");
    Comicfont=loadFont("moto_armonico/data/ComicSansMSBoldItalic.vlw");
}

function setup(){
    createCanvas(1000, 600);
    background(0);
    textFont(Comicfont, 48);
    proiectionY=260;
    massimo=125;
    minimo=375;
    raggio=223;
    raggio2=(massimo - minimo) / 2;
    proiectY=241;
}

function draw(){
    if(schermata == 0) {
        image(TestoSpiegazione, 0, 0, 1000, 600);
        if(keyCode == ENTER) schermata=1;
    }
    if(schermata == 1) {
        noStroke();
        background(255);
        fill(180, 0, 0);
        textFont(Comicfont, 48);
        text("MENU'", 420, 75);
        fill(0, 0, 200);
        textFont(Comicfont, 24);
        text("Proiezione sul diametro", 125, 400);
        textFont(Comicfont, 24);
        text("Pendolo", 680, 400);
        noFill();
        rect(150, 170, 200, 200);
        image(Simulazione1, 150, 170, 200, 169);
        rect(650, 170, 200, 200);
        image(Simulazione2, 650, 140, 200, 230);
        stroke(100);
        if(mouseX >= 150 && mouseX <= 350 && mouseY >= 170 && mouseY <= 370) {
            if(mouseIsPressed) schermata=2;
        }
        if(mouseX >= 650 && mouseX <= 850 && mouseY >= 170 && mouseY <= 370) {
            if(mouseIsPressed) schermata=3;
        }
    }
    if(schermata == 2) {
        background(0, 128, 255);
        image(Pausa, 860, 30, 80, 80);
        image(Play, 760, 23, 97, 97);
        stroke(0, 0, 90);
        rect(599, 374, 361, 221);
        image(FormuleOndaArmonica, 600, 375, 360, 220);
        costruzioneCirconferenza();
        fill(255);
        textFont(Comicfont, 14);
        text("BACKSPACE per tornare al menù", 30, 590);
        if(keyCode == BACKSPACE) schermata=0;
    }
    if(schermata == 3) {
        background(0);
        image(Pausa2, 860, 23, 97, 97);
        image(Play2, 750, 23, 97, 97);
        image(FormulePendolo, 600, 220, 340, 200);
        costruzionePendolo();
        fill(255);
        textFont(Comicfont, 14);
        text("BACKSPACE per tornare al menù", 760, 593);
        if(keyCode == BACKSPACE) schermata=0;
    }
}

function mouseReleased(){
    if(mouseX >= 760 && mouseX <= 857 && mouseY >= 23 && mouseY <= 120) {
        loop();
    }
    if(mouseX >= 510 && mouseX <= 610 && mouseY >= 150 && mouseY <= 210) {
        proiezione=!proiezione;
    }
    if(mouseX >= 620 && mouseX <= 720 && mouseY >= 150 && mouseY <= 210) {
        vettore=!vettore;
    }
    if(mouseX >= 840 && mouseX <= 940 && mouseY >= 150 && mouseY <= 210) {
        accelerazione=!accelerazione;
    }
    if(mouseX >= 510 && mouseX <= 610 && mouseY >= 230 && mouseY <= 290) {
        peso=!peso;
    }
    if(mouseX >= 730 && mouseX <= 830 && mouseY >= 150 && mouseY <= 210) {
        grafico=!grafico;
        ang2=0;
        x2=0;
    }
    if(mouseX >= 290 && mouseX <= 390 && mouseY >= 480 && mouseY <= 540) {
        grafico2=!grafico2;
        angle=0;
        x=0;
    }
    if(mouseX >= 410 && mouseX <= 510 && mouseY >= 480 && mouseY <= 540) {
        coordinate=!coordinate;
    }
    if(mouseX >= 170 && mouseX <= 270 && mouseY >= 480 && mouseY <= 540) {
        velocita=!velocita;
    }
    if(mouseX >= 50 && mouseX <= 150 && mouseY >= 480 && mouseY <= 540) {
        accelerazione2=!accelerazione2;
    }
}

function costruzionePendolo(){
    noStroke();
    fill(255);
    ellipse((2 * width) / 8, 55, 11, 11);
    p2x=(2 * width) / 8 + cos(radians(ang2)) * (raggio2);
    p2y=241 + sin(radians(ang2)) * (raggio2);
    proiectX=p2x;
    fill(255, 0, 0);
    cateto1=abs((2 * width) / 8 - proiectX);
    Px=proiectX;
    Py=55 + sqrt((raggio * raggio) - (cateto1 * cateto1));
    ellipse(Px, Py, 10, 10);
    stroke(100);
    strokeWeight(1);
    line((2 * width) / 8, 55, Px, Py);
    ang2-=freq;
    xAcc=p2x + cos(radians(ang2)) * mAcc;
    yAcc=p2y + sin(radians(ang2)) * mAcc;
    stroke(60);
    fill(100);
    textFont(Comicfont, 16);
    if(proiezione) fill(50);
    rect(510, 150, 100, 60);
    fill(100);
    if(vettore) fill(50);
    rect(620, 150, 100, 60);
    fill(100);
    if(grafico) fill(50);
    rect(730, 150, 100, 60);
    fill(100);
    if(accelerazione) fill(50);
    rect(840, 150, 100, 60);
    fill(100);
    if(peso) fill(50);
    rect(510, 230, 100, 60);
    fill(255);
    text("Proiezione", 522, 185);
    text("Vettore", 635, 170);
    text("velocità", 635, 200);
    text("Grafico", 747, 185);
    text("Vettore", 855, 170);
    text("accelerazione", 839.5, 200);
    text("Peso", 538, 265);
    if(grafico) showGraph();
    if(proiezione) showProiection();
    if(vettore) showVelocityVector();
    if(accelerazione) showAccelerationVector();
    if(peso) showWeight();
    if(mouseX >= 860 && mouseX <= 957 && mouseY >= 23 && mouseY <= 120) {
        if(mouseIsPressed) noLoop();
    }
}

function showProiection(){
    noFill();
    stroke(100);
    strokeWeight(1.5);
    ellipse((2 * width) / 8, 241, raggio2 * 2, raggio2 * 2);
    ellipse((2 * width) / 8, 241, 7, 7);
    stroke(100);
    line(minimo, 241, massimo, 241);
    fill(255);
    noStroke();
    ellipse(p2x, p2y, 8, 8);
    fill(150);
    ellipse(proiectX, proiectY, 5, 5);
    stroke(100);
    strokeWeight(0.5);
    line(proiectX, proiectY, p2x, p2y);
    line(proiectX, proiectY, Px, Py);
}

function showVelocityVector(){
    xVel=p2x - sin(radians(ang2)) * mVel;
    yVel=p2y + cos(radians(ang2)) * mVel;
    strokeWeight(1);
    stroke(0, 255, 0);
    line(p2x, p2y, xVel, yVel);
    ellipse(xVel, yVel, 3, 3);
    stroke(0, 255, 0);
    fill(0, 255, 0);
    line(proiectX, proiectY, xVel, 241);
    ellipse(xVel, 241, 3, 3);
}

function showGraph(){
    stroke(100);
    strokeWeight(1.5);
    angle2=0;
    for(let i = 0;i < width;i++) {
        py2=height - 120 + sin(radians(angle2)) * (radius);
        fill(255);
        point(i, py2);
        angle2-=freq;
    }
    line(0, height - 120, width, height - 120);
    noStroke();
    fill(255, 0, 0);
    ellipse(x2, height - 120 + sin(radians(ang2)) * (radius), 7, 7);
    x2+=1;
    if(x2 >= width + 142.8) {
        x2=0;
        ang2=0;
    }
    fill(255);
    text("Grafico: velocità - tempo", 10, height - 8);
}

function showAccelerationVector(){
    fill(255, 233, 16);
    stroke(255, 233, 16);
    ellipse(xAcc, yAcc, 3, 3);
    line(p2x, p2y, xAcc, yAcc);
    stroke(255, 233, 16);
    line(proiectX, proiectY, xAcc, 241);
    ellipse(xAcc, 241, 3, 3);
}

function showWeight(){
    fill(255, 51, 204);
    stroke(255, 51, 204);
    strokeWeight(1);
    line(Px, Py, Px, Py + 80);
    ellipse(Px, Py + 80, 3, 3);
    moduloComponentePeso=(moduloPeso * cateto1) / raggio;
    componenteOrizzontalePesoX=xAcc;
    componenteOrizzontalePesoY=Py + ((moduloComponentePeso * moduloComponentePeso) / moduloPeso);
    ellipse(componenteOrizzontalePesoX, componenteOrizzontalePesoY, 3, 3);
    line(Px, Py, componenteOrizzontalePesoX, componenteOrizzontalePesoY);
}

function costruzioneCirconferenza(){
    noStroke();
    fill(255);
    ellipse(width / 5, 260, radius * 2, radius * 2);
    strokeWeight(1);
    stroke(0);
    line(width / 5 - radius, 260, width / 5 + radius, 260);
    fill(0);
    textFont(Comicfont, 12);
    text("A = r", width / 5 - 60, 255);
    if(grafico2) mostraGrafico();
    if(coordinate) mostraCoordinate();
    if(velocita) mostraVelocita();
    if(accelerazione2) mostraAccelerazione();
    px=width / 5 + cos(radians(angle)) * (radius);
    py=260 + sin(radians(angle)) * (radius);
    strokeWeight(1);
    stroke(100);
    line(width / 5, 260, px, py);
    fill(0);
    ellipse(px, py, 8, 8);
    noStroke();
    proiectionX=px;
    fill(255, 0, 0);
    ellipse(proiectionX, proiectionY, 8, 8);
    angle-=frequency;
    stroke(0, 0, 90);
    fill(0, 0, 220);
    textFont(Comicfont, 16);
    if(accelerazione2) fill(0, 0, 100);
    rect(50, 480, 100, 60);
    fill(0, 0, 220);
    if(velocita) fill(0, 0, 100);
    rect(170, 480, 100, 60);
    fill(0, 0, 220);
    if(grafico2) fill(0, 0, 100);
    rect(290, 480, 100, 60);
    fill(0, 0, 220);
    if(coordinate) fill(0, 0, 100);
    rect(410, 480, 100, 60);
    fill(255);
    text("Vettore", 70, 505);
    text("accelerazione", 49.5, 530);
    text("Vettore", 185, 505);
    text("velocità", 185, 525);
    text("Grafico", 308, 515);
    text("Coordinate", 420, 515);
    if(mouseX >= 860 && mouseX <= 940 && mouseY >= 30 && mouseY <= 110) {
        if(mouseIsPressed) noLoop();
    }
}

function mostraGrafico(){
    angle2=0;
    strokeWeight(2);
    for(let i = 0;i < width;i++) {
        stroke(200);
        py2=260 - cos(radians(angle2)) * (radius);
        point(width / 5 + i, py2);
        angle2-=frequency;
        if(i == 288) {
            stroke(255, 255, 0);
            line(width / 5 + i, py2, width / 5 + i, 260);
            fill(255, 255, 0);
            text("A", width / 5 + i + 15, py2 + 60);
        }
    }
    stroke(255, 255, 0);
    strokeWeight(1);
    line(width / 5 + x, 260 - cos(radians(angle)) * (radius), width / 5 + x, 260);
    noStroke();
    fill(255, 0, 0);
    ellipse(width / 5 + x, 260 - cos(radians(angle)) * (radius), 7, 7);
    x+=1;
    if(x >= width) {
        x=0;
        angle=0;
    }
    strokeWeight(1);
    stroke(0);
    line(width / 5, 80, width / 5, height - 150);
    fill(0);
    triangle(width / 5, 80, width / 5 - 3, 85, width / 5 + 3, 85);
    line(0, 260, width, 260);
    triangle(width, 260, width - 6, 263, width - 6, 257);
}

function mostraVelocita(){
    xVel=px + sin(radians(angle)) * mVel;
    yVel=py - cos(radians(angle)) * mVel;
    stroke(0, 255, 0);
    fill(0, 255, 0);
    strokeWeight(1);
    line(px, py, xVel, yVel);
    ellipse(xVel, yVel, 3, 3);
    stroke(0, 255, 0);
    line(proiectionX, proiectionY, xVel, 260);
    ellipse(xVel, 260, 3, 3);
}

function mostraAccelerazione(){
    xAcc2=px - cos(radians(angle)) * mAcc;
    yAcc2=py - sin(radians(angle)) * mAcc;
    fill(255, 51, 204);
    stroke(255, 51, 204);
    strokeWeight(1.5);
    ellipse(xAcc2, yAcc2, 3, 3);
    line(px, py, xAcc2, yAcc2);
    stroke(255, 51, 204);
    strokeWeight(1.5);
    line(proiectionX, proiectionY, xAcc2, 260);
    ellipse(xAcc2, 260, 3, 3);
}

function mostraCoordinate(){
    cartesianY=int(abs(260 - py));
    cartesianX=int(abs(width / 5 - px));
    stroke(0, 0, 170);
    textFont(Comicfont, 16);
    fill(0, 50, 255);
    rect(380, 70, 70, 25);
    rect(470, 70, 70, 25);
    rect(560, 70, 70, 25);
    fill(255);
    text("y=Acosx", 385, 87);
    text("px = " + cartesianX, 475, 88);
    text("py = " + cartesianY, 565, 88);
}

function costruzionePendolofunc(){
    noStroke();
    fill(255);
    ellipse((2 * width) / 8, 55, 11, 11);
    p2x=(2 * width) / 8 + cos(radians(ang2)) * (raggio2);
    p2y=241 + sin(radians(ang2)) * (raggio2);
    proiectX=p2x;
    fill(255, 0, 0);
    cateto1=abs((2 * width) / 8 - proiectX);
    Px=proiectX;
    Py=55 + sqrt((raggio * raggio) - (cateto1 * cateto1));
    ellipse(Px, Py, 10, 10);
    stroke(100);
    strokeWeight(1);
    line((2 * width) / 8, 55, Px, Py);
    ang2-=freq;
    xAcc=p2x + cos(radians(ang2)) * mAcc;
    yAcc=p2y + sin(radians(ang2)) * mAcc;
    stroke(60);
    fill(100);
    textFont(Comicfont, 16);
    if(proiezione) fill(50);
    rect(510, 150, 100, 60);
    fill(100);
    if(vettore) fill(50);
    rect(620, 150, 100, 60);
    fill(100);
    if(grafico) fill(50);
    rect(730, 150, 100, 60);
    fill(100);
    if(accelerazione) fill(50);
    rect(840, 150, 100, 60);
    fill(100);
    if(peso) fill(50);
    rect(510, 230, 100, 60);
    fill(255);
    text("Proiezione", 522, 185);
    text("Vettore", 635, 170);
    text("velocità", 635, 200);
    text("Grafico", 747, 185);
    text("Vettore", 855, 170);
    text("accelerazione", 839.5, 200);
    text("Peso", 538, 265);
    if(grafico) showGraph();
    if(proiezione) showProiection();
    if(vettore) showVelocityVector();
    if(accelerazione) showAccelerationVector();
    if(peso) showWeight();
    if(mouseX >= 860 && mouseX <= 957 && mouseY >= 23 && mouseY <= 120) {
        if(mouseIsPressed) noLoop();
    }
}

function showProiectionfunc(){
    noFill();
    stroke(100);
    strokeWeight(1.5);
    ellipse((2 * width) / 8, 241, raggio2 * 2, raggio2 * 2);
    ellipse((2 * width) / 8, 241, 7, 7);
    stroke(100);
    line(minimo, 241, massimo, 241);
    fill(255);
    noStroke();
    ellipse(p2x, p2y, 8, 8);
    fill(150);
    ellipse(proiectX, proiectY, 5, 5);
    stroke(100);
    strokeWeight(0.5);
    line(proiectX, proiectY, p2x, p2y);
    line(proiectX, proiectY, Px, Py);
}

function showVelocityVectorfunc(){
    xVel=p2x - sin(radians(ang2)) * mVel;
    yVel=p2y + cos(radians(ang2)) * mVel;
    strokeWeight(1);
    stroke(0, 255, 0);
    line(p2x, p2y, xVel, yVel);
    ellipse(xVel, yVel, 3, 3);
    stroke(0, 255, 0);
    fill(0, 255, 0);
    line(proiectX, proiectY, xVel, 241);
    ellipse(xVel, 241, 3, 3);
}

function showGraphfunc(){
    stroke(100);
    strokeWeight(1.5);
    angle2=0;
    for(let i = 0;i < width;i++) {
        py2=height - 120 + sin(radians(angle2)) * (radius);
        fill(255);
        point(i, py2);
        angle2-=freq;
    }
    line(0, height - 120, width, height - 120);
    noStroke();
    fill(255, 0, 0);
    ellipse(x2, height - 120 + sin(radians(ang2)) * (radius), 7, 7);
    x2+=1;
    if(x2 >= width + 142.8) {
        x2=0;
        ang2=0;
    }
    fill(255);
    text("Grafico: velocità - tempo", 10, height - 8);
}

function showAccelerationVectorfunc(){
    fill(255, 233, 16);
    stroke(255, 233, 16);
    ellipse(xAcc, yAcc, 3, 3);
    line(p2x, p2y, xAcc, yAcc);
    stroke(255, 233, 16);
    line(proiectX, proiectY, xAcc, 241);
    ellipse(xAcc, 241, 3, 3);
}

function showWeightfunc(){
    fill(255, 51, 204);
    stroke(255, 51, 204);
    strokeWeight(1);
    line(Px, Py, Px, Py + 80);
    ellipse(Px, Py + 80, 3, 3);
    moduloComponentePeso=(moduloPeso * cateto1) / raggio;
    componenteOrizzontalePesoX=xAcc;
    componenteOrizzontalePesoY=Py + ((moduloComponentePeso * moduloComponentePeso) / moduloPeso);
    ellipse(componenteOrizzontalePesoX, componenteOrizzontalePesoY, 3, 3);
    line(Px, Py, componenteOrizzontalePesoX, componenteOrizzontalePesoY);
}

function costruzioneCirconferenzafunc(){
    noStroke();
    fill(255);
    ellipse(width / 5, 260, radius * 2, radius * 2);
    strokeWeight(1);
    stroke(0);
    line(width / 5 - radius, 260, width / 5 + radius, 260);
    fill(0);
    textFont(Comicfont, 12);
    text("A = r", width / 5 - 60, 255);
    if(grafico2) mostraGrafico();
    if(coordinate) mostraCoordinate();
    if(velocita) mostraVelocita();
    if(accelerazione2) mostraAccelerazione();
    px=width / 5 + cos(radians(angle)) * (radius);
    py=260 + sin(radians(angle)) * (radius);
    strokeWeight(1);
    stroke(100);
    line(width / 5, 260, px, py);
    fill(0);
    ellipse(px, py, 8, 8);
    noStroke();
    proiectionX=px;
    fill(255, 0, 0);
    ellipse(proiectionX, proiectionY, 8, 8);
    angle-=frequency;
    stroke(0, 0, 90);
    fill(0, 0, 220);
    textFont(Comicfont, 16);
    if(accelerazione2) fill(0, 0, 100);
    rect(50, 480, 100, 60);
    fill(0, 0, 220);
    if(velocita) fill(0, 0, 100);
    rect(170, 480, 100, 60);
    fill(0, 0, 220);
    if(grafico2) fill(0, 0, 100);
    rect(290, 480, 100, 60);
    fill(0, 0, 220);
    if(coordinate) fill(0, 0, 100);
    rect(410, 480, 100, 60);
    fill(255);
    text("Vettore", 70, 505);
    text("accelerazione", 49.5, 530);
    text("Vettore", 185, 505);
    text("velocità", 185, 525);
    text("Grafico", 308, 515);
    text("Coordinate", 420, 515);
    if(mouseX >= 860 && mouseX <= 940 && mouseY >= 30 && mouseY <= 110) {
        if(mouseIsPressed) noLoop();
    }
}

function mostraGraficofunc(){
    angle2=0;
    strokeWeight(2);
    for(let i = 0;i < width;i++) {
        stroke(200);
        py2=260 - cos(radians(angle2)) * (radius);
        point(width / 5 + i, py2);
        angle2-=frequency;
        if(i == 288) {
            stroke(255, 255, 0);
            line(width / 5 + i, py2, width / 5 + i, 260);
            fill(255, 255, 0);
            text("A", width / 5 + i + 15, py2 + 60);
        }
    }
    stroke(255, 255, 0);
    strokeWeight(1);
    line(width / 5 + x, 260 - cos(radians(angle)) * (radius), width / 5 + x, 260);
    noStroke();
    fill(255, 0, 0);
    ellipse(width / 5 + x, 260 - cos(radians(angle)) * (radius), 7, 7);
    x+=1;
    if(x >= width) {
        x=0;
        angle=0;
    }
    strokeWeight(1);
    stroke(0);
    line(width / 5, 80, width / 5, height - 150);
    fill(0);
    triangle(width / 5, 80, width / 5 - 3, 85, width / 5 + 3, 85);
    line(0, 260, width, 260);
    triangle(width, 260, width - 6, 263, width - 6, 257);
}

function mostraVelocitafunc(){
    xVel=px + sin(radians(angle)) * mVel;
    yVel=py - cos(radians(angle)) * mVel;
    stroke(0, 255, 0);
    fill(0, 255, 0);
    strokeWeight(1);
    line(px, py, xVel, yVel);
    ellipse(xVel, yVel, 3, 3);
    stroke(0, 255, 0);
    line(proiectionX, proiectionY, xVel, 260);
    ellipse(xVel, 260, 3, 3);
}

function mostraAccelerazionefunc(){
    xAcc2=px - cos(radians(angle)) * mAcc;
    yAcc2=py - sin(radians(angle)) * mAcc;
    fill(255, 51, 204);
    stroke(255, 51, 204);
    strokeWeight(1.5);
    ellipse(xAcc2, yAcc2, 3, 3);
    line(px, py, xAcc2, yAcc2);
    stroke(255, 51, 204);
    strokeWeight(1.5);
    line(proiectionX, proiectionY, xAcc2, 260);
    ellipse(xAcc2, 260, 3, 3);
}

function mostraCoordinatefunc(){
    cartesianY=int(abs(260 - py));
    cartesianX=int(abs(width / 5 - px));
    stroke(0, 0, 170);
    textFont(Comicfont, 16);
    fill(0, 50, 255);
    rect(380, 70, 70, 25);
    rect(470, 70, 70, 25);
    rect(560, 70, 70, 25);
    fill(255);
    text("y=Acosx", 385, 87);
    text("px = " + cartesianX, 475, 88);
    text("py = " + cartesianY, 565, 88);
}


