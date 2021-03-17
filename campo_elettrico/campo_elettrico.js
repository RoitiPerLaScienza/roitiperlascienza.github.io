let timer = 0;
let k = 0;
let epsilon = 0;
let nGriglia = 30;
let inibisci;
let lunghezza_bussola = 0;
let back;
let movimento;
let azione;
let scala;
let bussole;
let cariche;
let sensori;
let equipotenziali;
let fili;
let piani;
let sensori_pot;
let oggetti;
let strumenti;
let bussola;
let refresh;
let exit;
function preload(){
    k = 8.9875 * pow(10, 9);
    epsilon = 1 / (4 * PI * k);
    bussola=loadImage("compass.png");
    refresh=loadImage("refresh.png");
    exit=loadImage("exit.jpg");
}

function setup(){
    fullScreen();
    back=(200);
    scala=new Scala(9 * width / 20, 9 * height / 10 - 10);
    oggetti=new Barra(new p5.Vector(width * 9 / 10, height / 8), width / 10, 3 * height / 4, 4);
    strumenti=new Barra(new p5.Vector(0, height / 8), width / 10, 3 * height / 4, 5);
    cariche=new Array();
    sensori=new Array();
    equipotenziali=new Array();
    fili=new Array();
    piani=new Array();
    sensori_pot=new Array();
    inibisci=false;
    movimento=false;
    azione=false;
    lunghezza_bussola=width / nGriglia;
    bussole=processing2jsNewNDimArray([nGriglia, nGriglia]);
    for(let i = 0;i < nGriglia;i++) {
        for(let j = 0;j < nGriglia;j++) {
            bussole[i][j]=new Bussola();
            bussole[i][j].pos.set((i + 1) * lunghezza_bussola, (j + 1) * lunghezza_bussola);
        }
    }
}

function draw(){
    if(millis() < 5000) {
        menu();
    }
    else {
        background(back);
        for(let i = 0;i < nGriglia;i++) {
            for(let j = 0;j < nGriglia;j++) {
                bussole[i][j].show();
            }
        }
        for(let i = 0;i < equipotenziali.length;i++) {
            equipotenziali[i].show();
        }
        for(let i = 0;i < sensori_pot.length;i++) {
            sensori_pot[i].show();
        }
        azione=false;
        for(let i = 0;i < fili.length;i++) {
            fili[i].show();
        }
        for(let i = 0;i < piani.length;i++) {
            piani[i].show();
        }
        oggetti.show();
        strumenti.show();
        for (let P2JSi = 0; P2JSi < cariche.length; P2JSi++){
            let p = cariche[P2JSi];
            p.show();
        }
        for (let P2JSi = 0; P2JSi < sensori.length; P2JSi++){
            let s = sensori[P2JSi];
            s.show();
        }
        scala.show();
        fill(100);
        textSize(width / 50);
        text("Press 'H' for help", width / 2, height / 40);
    }
}

function mousePressed(){
    timer=millis();
    refresh=loadImage("refresh.png");
}

function keyPressed(){
    if(key == 'h') {
        link("https://docs.google.com/document/d/1Ajb9yDfhTAwBAHazcEYn9WY_0vPjXfchTNBHqBJeo5w/edit?usp=sharing");
    }
}

function menu(){
    background(180);
    textAlign(CENTER, CENTER);
    textSize(width / 20);
    text("Simulatore di campi elettrici", width / 2, height / 3);
    textSize(width / 30);
    text("Travagli Peruzzi Melloni", width / 2, height * 3 / 5);
    textSize(width / 35);
    text("4p Roiti 2020", width / 2, height * 4 / 5);
}


function fullScreen( ){
   createCanvas(displayWidth, displayHeight);
}

function processing2jsNewNDimArray(dimensions) {
    if (dimensions.length > 0) {
        let dim = dimensions[0];
        let rest = dimensions.slice(1);
        let newArray = new Array();
        for (var i = 0; i < dim; i++) {
            newArray[i] = processing2jsNewNDimArray(rest);
        }
        return newArray;
     } else {
        return undefined;
     }
 }


function setup(){
    class;
    Equipot;
    {
    let pos;
    let potenziale;
    let attiva;
    let pixel;
    Equipot();
    {
        pos=new p5.Vector();
        potenziale=0;
        attiva=false;
        pixel=processing2jsNewNDimArray([width / 3, height / 3]);
        for(let i = 0;i < width / 3;i++) {
                for(let j = 0;j < height / 3;j++) {
                    pixel[i][j]=false;
                }
            }
    }
    void;
    update();
    {
        if(attiva) {
                fill(0);
                text(float(potenziale(new p5.Vector(mouseX, mouseY)) + " V"), mouseX, mouseY);
                if(!oggetti.isOver() & !strumenti.isOver() & mouseIsPressed) {
                    pos.set(mouseX, mouseY);
                    potenziale=potenziale(pos);
                    attiva=false;
                    if(potenziale == 0) {
                        equipotenziali.remove(equipotenziali.size() - 1);
                    }
                }
            }
        if(movimento || azione || mouseIsPressed) {
                for(let i = 0;i < width / 3;i++) {
                    for(let j = 0;j < height / 3;j++) {
                        if(abs(float((potenziale(new p5.Vector(i * 3, j * 3)) - potenziale))) < abs(float(potenziale * 0.01)) & !inibisci) {
                            pixel[i][j]=true;
                        }
    else {
                            pixel[i][j]=false;
                        }
                    }
                }
            }
    }
    void;
    show();
    {
        if(!inibisci) {
                update();
                stroke(0);
                strokeWeight(1);
                for(let i = 0;i < width / 3;i++) {
                    for(let j = 0;j < height / 3;j++) {
                        if(pixel[i][j]) {
                            point(i * 3, j * 3);
                        }
                    }
                }
            }
    }
}
    double;
    potenziale(p5.Vector, p);
    {
    let var = 0;
    for(let i = 0;i < cariche.size();i++) {
            var+=((k * cariche.get(i).intensita) / (p.dist(cariche.get(i).pos) * scala.getScala()));
        }
    for(let i = 0;i < piani.size();i++) {
            var+=((piani.get(i).lambda * (999999999 - piani.get(i).distanza_punto(p))) / (2 * epsilon));
        }
    for(let i = 0;i < fili.size();i++) {
            var+=((fili.get(i).lambda) * log(999999999 / fili.get(i).distanza_punto(p)) / (2 * PI * epsilon));
        }
    return var;
}
}


function processing2jsNewNDimArray(dimensions) {
    if (dimensions.length > 0) {
        let dim = dimensions[0];
        let rest = dimensions.slice(1);
        let newArray = new Array();
        for (var i = 0; i < dim; i++) {
            newArray[i] = processing2jsNewNDimArray(rest);
        }
        return newArray;
     } else {
        return undefined;
     }
 }

function setup(){
    class;
    Sensore_pot;
    {
    let pos;
    let attivo;
    let potenziale;
    Sensore_pot();
    {
        pos=new p5.Vector();
        attivo=true;
        potenziale=0;
    }
    void;
    update();
    {
        if(attivo) {
                noCursor();
                textAlign(LEFT_ARROW, CENTER);
                fill(0);
                text(float(potenziale(new p5.Vector(mouseX, mouseY)) + " V"), mouseX + width / 40, mouseY);
                strokeWeight(1);
                noFill();
                ellipse(mouseX, mouseY, width / 40, width / 40);
                stroke(255, 0, 0);
                strokeWeight(3);
                point(mouseX, mouseY);
                fill(0);
                stroke(0);
                if(!oggetti.isOver() & !strumenti.isOver() & mouseIsPressed) {
                    if(mouseButton == RIGHT_ARROW) {
                        pos.set(mouseX, mouseY);
                        potenziale=potenziale(pos);
                        attivo=false;
                    }
    else if(mouseButton == LEFT_ARROW) {
                        attivo=false;
                        pos.set(-100, -100);
                        sensori_pot.remove(sensori_pot.size() - 1);
                    }
                    cursor();
                }
            }
    }
    void;
    show();
    {
        update();
        if(movimento || azione || mouseIsPressed) {
                potenziale=potenziale(pos);
            }
        if(!attivo & !inibisci) {
                textAlign(LEFT_ARROW, CENTER);
                fill(0);
                text(float(potenziale + " V"), pos.x + width / 40, pos.y);
                strokeWeight(5);
                stroke(255, 0, 0);
                point(pos.x, pos.y);
                fill(0);
                stroke(0);
            }
    }
}
}

function setup(){
    class;
    Ring;
    {
    let x;
    let y;
    let rout;
    let rin;
    let numeri;
    let min;
    let max;
    let value;
    let r;
    let ang;
    let ang1;
    let step;
    let out = new String();
    let press = true;
    let use = false;
    let exp = 0;
    let positivo;
    let unita_misura;
    Ring(float, xi, float, yi, float, out, float, in, int, num, float, maxi, float, mini);
    {
        x=xi;
        y=yi;
        rout=out;
        rin=in;
        numeri=num;
        max=maxi;
        min=mini;
        r=((rout + rin) / 2);
        step=TWO_PI / (numeri * 100);
        positivo=true;
        unita_misura=new Array(3);
        unita_misura[0]="C";
        unita_misura[1]="C/m";
        unita_misura[2]="C/m^2";
    }
    void;
    show(int, k);
    {
        fill(back);
        strokeWeight(1);
        stroke(0);
        rect(x - (rout * 1.05), y - (rout * 1.05), 2.1 * rout, 3 * rout);
        strokeWeight(1);
        stroke(0);
        fill(255);
        circle(x, y, 2 * rout);
        if(value == 0) {
                fill(back);
            }
    else if(positivo) {
                fill(255, 60, 60);
            }
    else if(!positivo) {
                fill(120, 150, 255);
            }
    else {
                fill(back);
            }
        circle(x, y, 2 * rin);
        fill(0);
        if(use) {
                if(mouseY - y < 0) {
                    ang1=acos((x - mouseX) / dist(x, y, mouseX, mouseY)) - PI;
                    value=map(ang1, -PI, 0, (max - min) / 2 + 1, max);
                }
    else {
                    ang1=PI - acos((x - mouseX) / dist(x, y, mouseX, mouseY));
                    value=map(ang1, 0, PI, min, (max - min) / 2 + 1);
                }
            }
        strokeWeight(5);
        stroke(255, 0, 0);
        line(rin * cos(ang1) + x, rin * sin(ang1) + y, rout * cos(ang1) + x, rout * sin(ang1) + y);
        strokeWeight(1);
        value*=100;
        value=round(value);
        value/=100;
        out=nfs(value, 1, 2);
        textSize(rout / 6);
        if(value == 0) {
                text("0.00*10^" + exp + unita_misura[k], x, y);
            }
    else if(positivo) {
                text('+' + out + "*10^" + exp + unita_misura[k], x, y);
            }
    else if(!positivo) {
                text('-' + out + "*10^" + exp + unita_misura[k], x, y);
            }
    else {
                text("0.00*10^" + exp + unita_misura[k], x, y);
            }
        for(let i = 0;i < numeri;i++) {
                ang=(TWO_PI / numeri) * i;
                textSize(rout / 5);
                textAlign(CENTER, CENTER);
                text(int((min + i)), (x + (r * cos(ang))), (y + (r * sin(ang))));
            }
        if(mouseIsPressed & ((dist(x, y, mouseX, mouseY) <= rout & !use) || use) & press) {
                use=!use;
                press=false;
            }
    else if(mouseIsPressed) {
            }
    else {
                press=true;
            }
        stroke(0);
        fill(0, 255, 0);
        circle(x + rout / 2, y + (5 * rout / 4), rout / 3);
        circle(x - rout / 2, y + (5 * rout / 4), rout / 3);
        if(value == 0) {
                fill(100);
            }
    else if(positivo) {
                fill(120, 150, 255);
            }
    else if(!positivo) {
                fill(255, 60, 60);
            }
    else {
                fill(100);
            }
        circle(x + rout / 2, y + (7 * rout / 4), rout / 3);
        fill(100);
        circle(x - rout / 2, y + (7 * rout / 4), rout / 3);
        if(mouseIsPressed & dist(x + (rout / 2), y + (7 * (rout / 4)), mouseX, mouseY) <= rout / 3 & x - mouseX < 0 & press) {
                positivo=!positivo;
                press=false;
            }
    else if(mouseIsPressed) {
            }
    else {
                press=true;
            }
        if(mouseIsPressed & dist(x - (rout / 2), y + (7 * (rout / 4)), mouseX, mouseY) <= rout / 3 & x - mouseX >= 0 & press) {
                ang1=0;
                value=0;
                press=false;
            }
    else if(mouseIsPressed) {
            }
    else {
                press=true;
            }
        if(mouseIsPressed & dist(x + (rout / 2), y + (5 * (rout / 4)), mouseX, mouseY) <= rout / 3 & x - mouseX < 0 & press) {
                if(exp != 2) {
                    exp++;
                }
                press=false;
            }
    else if(mouseIsPressed) {
            }
    else {
                press=true;
            }
        if(mouseIsPressed & dist(x - (rout / 2), y + (5 * (rout / 4)), mouseX, mouseY) <= rout / 3 & x - mouseX >= 0 & press) {
                if(exp != -19) {
                    exp--;
                }
                press=false;
            }
    else if(mouseIsPressed) {
            }
    else {
                press=true;
            }
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(rout / 3);
        text('+', x + (rout / 2), y + (5 * rout / 4));
        text('-', x - (rout / 2), y + (5 * rout / 4));
        textSize(rout / 5);
        text("exp", x, y + (5 * rout / 4));
    }
    double;
    get_value();
    {
        if(positivo || value == 0) {
                return double((value * pow(10, exp)));
            }
    else {
                return double((-value * pow(10, exp)));
            }
    }
    boolean;
    isOver();
    {
        if(mouseX >= x - (rout * 1.05) && mouseX <= x + 1.05 * rout && mouseY >= y - (rout * 1.05) && mouseY <= y + 1.95 * rout) {
                return true;
            }
    else {
                return false;
            }
    }
}
}

function setup(){
    class;
    Particella;
    {
    let pos;
    let isOver;
    let isSelected;
    let premibile;
    let moving;
    let anello;
    let intensita;
    let r;
    Particella();
    {
        r=width / 50;
        intensita=0;
        pos=new p5.Vector(oggetti.spawn.x, oggetti.spawn.y);
        isOver=false;
        isSelected=false;
        premibile=true;
        anello=new Ring(width / 2, height / 2, 100, 80, 9, 10, 1);
        moving=false;
    }
    color;
    setColore();
    {
        if(intensita > 0) {
                return color(255, 0, 0);
            }
    else if(intensita < 0) {
                return color(0, 0, 255);
            }
    else {
                return color(150);
            }
    }
    void;
    show();
    {
        update();
        if(!inibisci || isSelected) {
                stroke(0);
                if(isSelected) {
                    strokeWeight(5);
                    fill(setColore());
                    ellipse(pos.x, pos.y, 2 * r, 2 * r);
                    if(premibile & !moving) {
                        anello.show(0);
                    }
                }
    else if(isOver) {
                    strokeWeight(3);
                    fill(setColore());
                    ellipse(pos.x, pos.y, 2 * r, 2 * r);
                }
    else {
                    strokeWeight(1);
                    fill(setColore());
                    ellipse(pos.x, pos.y, 2 * r, 2 * r);
                }
            }
    }
    void;
    update();
    {
        isOver();
        drag();
        isSelected();
    }
    void;
    isOver();
    {
        let mouse = new p5.Vector(mouseX, mouseY);
        if(mouse.dist(pos) <= r) {
                isOver=true;
            }
    else {
                isOver=false;
            }
    }
    void;
    isSelected();
    {
        if(mouseIsPressed && mouseButton == LEFT_ARROW && premibile & !moving & ((isOver && !isSelected) || isSelected & !anello.isOver())) {
                premibile=false;
                inibisci=!inibisci;
                isSelected=!isSelected;
                anello.use=false;
                azione=true;
                intensita=anello.get_value();
            }
    else if(mouseIsPressed) {
            }
    else {
                premibile=true;
            }
    }
    void;
    drag();
    {
        if(mouseIsPressed && mouseButton == RIGHT_ARROW && premibile && isOver) {
                premibile=false;
                moving=!moving;
                movimento=!movimento;
            }
    else if(mouseIsPressed) {
            }
    else {
                premibile=true;
            }
        if(moving) {
                pos.set(mouseX, mouseY);
            }
    }
}
}

function setup(){
    class;
    Scala;
    {
    let fattore;
    let press;
    let pos;
    let dim;
    Scala(float, a, float, b);
    {
        fattore=0;
        press=true;
        pos=new p5.Vector(a, b);
        dim=new p5.Vector(110, 55);
    }
    void;
    show();
    {
        update();
        strokeWeight(1);
        stroke(0);
        line(pos.x + 5, pos.y, pos.x + 5, pos.y + dim.y / 2);
        line(pos.x + 105, pos.y, pos.x + 105, pos.y + dim.y / 2);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(dim.y * 5 / 16);
        text("1*10^" + (fattore + 2) + 'm'.charCodeAt(0), dim.x / 2 + pos.x, pos.y + dim.y / 4);
        fill(0, 255, 0);
        circle(pos.x + dim.x / 4, pos.y + dim.y * 3 / 4, dim.x / 6);
        circle(pos.x + dim.x * 3 / 4, pos.y + dim.y * 3 / 4, dim.x / 6);
        fill(0);
        text('+', pos.x + dim.x / 4, pos.y + dim.y * 3 / 4);
        text('-', pos.x + dim.x * 3 / 4, pos.y + dim.y * 3 / 4);
    }
    void;
    update();
    {
        if(mouseIsPressed & dist(pos.x + dim.x / 4, pos.y + dim.y * 3 / 4, mouseX, mouseY) <= dim.x / 6 & press) {
                if(fattore <= 5) {
                    fattore++;
                }
                azione=true;
                press=false;
            }
    else if(mouseIsPressed) {
            }
    else {
                press=true;
            }
        if(mouseIsPressed & dist(pos.x + dim.x * 3 / 4, pos.y + dim.y * 3 / 4, mouseX, mouseY) <= dim.x / 6 & press) {
                if(fattore >= -9) {
                    fattore--;
                }
                azione=true;
                press=false;
            }
    else if(mouseIsPressed) {
            }
    else {
                press=true;
            }
    }
    float;
    getScala();
    {
        return pow(10, fattore);
    }
}
}

class Bussola {//stampa a schermo bussole la cui direzione è influenzata da campo elettrico
  let pos;//estremo fisso di bussola
  let direzione;//estremo finale
  let visibile;

  Bussola() {
    pos= createVector(0, 0);
    direzione= createVector(0, 0);
    visibile=false;
  }

  function show() {//stampa bussole orientate
    update();
    if (!inibisci & visibile) {
      strokeWeight(2);
      stroke(0);
      line(pos.x, pos.y, pos.x+direzione.x, pos.y+direzione.y);
      stroke(#288E21);
      strokeWeight(5);
      polet(pos.x+direzione.x, pos.y+direzione.y);
      stroke(0);
    }
  }

  function update() {//aggiorna direzione
    let dir= createVector(0, 0);
    direzione.set(0, 0);
    for (let i=0; i<cariche.createCanvas(); i++) {
      if (!pos.equals(cariche.get(i).pos)) {//calcola il contributo di ogni particella alla direzione
        dir= pos.copy();
        dir.sub(cariche.get(i).pos);
        dir.normalize();

        dir.mult((let)(k*cariche.get(i).letensita/pow(pos.dist(cariche.get(i).pos), 2)));//formula del campo elettrico di una particella
      } else {//se la carica è sovrapposta alla bussola, direzione coincide con pos
        dir.set(0, 0);
      }

      direzione.add(dir);
    }

    for (let i=0; i<fili.createCanvas(); i++) {//calcola il contributo di ogni filo alla direzione
      let Proiezione= createVector(0, 0);

      if ((fili.get(i).A.x==fili.get(i).B.x & fili.get(i).A.x!=pos.x) || fili.get(i).m*pos.x+fili.get(i).q!=pos.y) {
        if (fili.get(i).A.x==fili.get(i).B.x) {//se il filo è verticale
          Proiezione.set(fili.get(i).A.x, pos.y);//trovo la proiezione della bussola sul filo (letuitivamente)
        } else {
          let m= fili.get(i).m;
          let q= fili.get(i).q;
          Proiezione.set(((pos.x + m *(pos.y - q))/(1+m*m)), ((m*m*pos.y+m*pos.x+q)/(m*m+1)) );//altrimenti con formula
        }

        dir= pos.copy();
        dir.sub(Proiezione);
        dir.normalize();


        dir.mult((let)(fili.get(i).lambda/(2*PI*epsilon*pos.dist(Proiezione)*scala.getScala())));//formula del campo elettrico di un filo
      } else {//se i perni del filo sono sovrapposti alla bussola, direzione coincide con pos
        dir.set(0, 0);
      }

      direzione.add(dir);
    }

    for (let i=0; i<piani.createCanvas(); i++) {//calcola il contributo di ogni piano alla direzione (analogo a filo)
      let Proiezione= createVector(0, 0);
      if ((piani.get(i).A.x==piani.get(i).B.x & piani.get(i).A.x!=pos.x) || piani.get(i).m*pos.x+piani.get(i).q!=pos.y) {
        if (piani.get(i).A.x==piani.get(i).B.x) {
          Proiezione.set(piani.get(i).A.x, pos.y);
        } else {
          let m= piani.get(i).m;
          let q= piani.get(i).q;
          Proiezione.set(((pos.x + m *(pos.y - q))/(1+m*m)), ((m*m*pos.y+m*pos.x+q)/(m*m+1)) );
        }

        dir= pos.copy();
        dir.sub(Proiezione);
        dir.normalize();


        dir.mult((let)(piani.get(i).lambda/(2*epsilon)));//formula del campo elettrico di un piano
      } else {
        dir.set(0, 0);
      }

      direzione.add(dir);
    }



    direzione.normalize();
    direzione.mult(lunghezza_bussola);
  }
}

class Filo {//distribuzione continua lineare infinita di carica
  let A;//posizioni di perni del filo
  let B;
  double lambda;//densita lineare di carica
  let stato;//stato durante posizionamento perni
  let r;//raggio perni
  let premibile, moveA, moveB, isSelected;//variabili di controllo
  let m, q;//coefficiente angolare e ordinata all'origine
  Ring a;//selettore circolare

  Filo() {
    a=new Ring (width/2, height/2, 100, 80, 9, 10, 1);
    A= new let();
    B= new let();
    lambda=0;
    stato=0;
    premibile=true;
    r=width/60;
    moveA = false;
    moveB= false;
    isSelected=false;
    m=0;
    q=0;
  }

  function show() {//mostra e aggiorna filo (segmento su tutto lo schermo)
    switch (stato) {//se lo stato è
    case 0://0 sto inserendo il primo perno
      fill(200);
      ellipse(mouseX, mouseY, 2*r, 2*r);
      if (oggetti.premibile & mouseIsPressed&premibile) {//al clic posiziona A
        A.set(mouseX, mouseY);
        stato=1;
        premibile=false;
      }
      break;
    case 1://1 sto inserendo il secondo perno
      fill(200);
      ellipse(mouseX, mouseY, 2*r, 2*r);
      ellipse(A.x, A.y, 2*r, 2*r);
      retta(A, createVector(mouseX, mouseY));//stampa retta tra A e mouse
      if (premibile & mouseIsPressed) {//al clic posiziona B
        B.set(mouseX, mouseY);
        stato=2;
      } else if (mouseIsPressed) {
      } else {
        premibile=true;
      }

      break;
    case 2://2 filo è posizionato. Posso leteragirvi
      if (mouseIsPressed & isOver(A, r)& mouseButton==RIGHT & premibile) {//se clicco su A, posso muoverlo (move=true)
        moveA= !moveA;
        premibile= false;
      } else if (mouseIsPressed) {
      } else {
        premibile= true;
      }

      if (mouseIsPressed & mouseButton==RIGHT & isOver(B, r) & premibile) {//...B
        moveB= !moveB;
        premibile= false;
      } else if (mouseIsPressed) {
      } else {
        premibile= true;
      }

      if (moveA) {//se posso muovere A
        azione=true;
        A.set(mouseX, mouseY);//aggiorno posizione
      } else if (moveB) {//...B
        azione=true;
        B.set(mouseX, mouseY);
      }

      isSelected();

      if (!inibisci || isSelected) {//se seleziono A o filo non è inibito
        if (isSelected) { 
          if (premibile & !moveA & !moveB) {
            a.show(1);//accedo a selettore per modificare lambda
          }
        }
      }

      if (!inibisci) {//stampa perni e retta per essi
        fill(#FF911A);
        ellipse(A.x, A.y, 2*r, 2*r);
        fill(200);
        ellipse(B.x, B.y, 2*r, 2*r);
        retta(A, B);
        stroke(0);
      }
      break;
    }
  }

  function retta(let a, let b) {//stampa segmento passante per a e b con estremi su bordi schermo 
    strokeWeight(3);
    stroke(setColore());
    if (a.x==b.x) {//controllo su retta verticale
      line(a.x, 0, a.x, height);
    } else {
      m=(a.y-b.y)/(a.x-b.x);
      q=a.y-(b.y-a.y)*a.x/(b.x-a.x);

      line(0, q, width, m*width+q);
    }
  }

  let isOver(let p, let l) {
    let mouse= createVector(mouseX, mouseY);
    if (mouse.dist(p)<=l) {
      return true;
    } else {
      return false;
    }
  }

  function isSelected() {
    if (mouseIsPressed && mouseButton==LEFT && premibile & !moveA & !moveB & ((isOver(A, r) && !isSelected) || isSelected & !a.isOver())) {
      premibile=false;
      inibisci=!inibisci;
      isSelected= !isSelected;
      a.use=false;
      lambda= a.get_value();
    } else if (mouseIsPressed) {
    } else {
      premibile=true;
    }
  }

  color setColore() {//cambia colore retta a seconda di polarità
    if (lambda>0) {
      return color(255, 0, 0);
    } else if (lambda<0) {
      return color(0, 0, 255);
    } else {
      return color(150);
    }
  }

  let distanza_punto(let p) {//restituisce distanza di p da filo
    let Proiezione= createVector(0, 0);
    if (A.x==B.x) {
      Proiezione.set(A.x, p.y);
    } else {
      Proiezione.set(    ((p.x + m *(p.y - q))/(1+m*m)), ((m*m*p.y+m*p.x+q)/(m*m+1)) );
    }
    return (p.dist(Proiezione)*scala.getScala());
  }
}

class Piano extends Filo {//distribuzione continua piana infinita di carica (estende classe Filo)
  function retta(let a, let b) {
    strokeWeight(6.5);//modifica retta() di filo per avere maggiore spessore
    stroke(setColore());
    if (a.x==b.x) {
      line(a.x, 0, a.x, height);
    } else {
      m=(a.y-b.y)/(a.x-b.x);
      q=a.y-(b.y-a.y)*a.x/(b.x-a.x);

      line(0, q, width, m*width+q);
    }
  }

  function show() {
    switch (stato) {
    case 0:
      fill(200);
      ellipse(mouseX, mouseY, 2*r, 2*r);
      if (oggetti.premibile & mouseIsPressed&premibile) {
        A.set(mouseX, mouseY);
        stato=1;
        premibile=false;
      }
      break;
    case 1:
      fill(200);
      ellipse(mouseX, mouseY, 2*r, 2*r);
      ellipse(A.x, A.y, 2*r, 2*r);
      retta(A, createVector(mouseX, mouseY));
      if (premibile & mouseIsPressed) {
        B.set(mouseX, mouseY);
        stato=2;
      } else if (mouseIsPressed) {
      } else {
        premibile=true;
      }

      break;
    case 2:
      if (mouseIsPressed & isOver(A, r)& mouseButton==RIGHT & premibile) {

        moveA= !moveA;
        premibile= false;
      } else if (mouseIsPressed) {
      } else {
        premibile= true;
      }

      if (mouseIsPressed & mouseButton==RIGHT & isOver(B, r) & premibile) {
        moveB= !moveB;
        premibile= false;
      } else if (mouseIsPressed) {
      } else {
        premibile= true;
      }


      if (moveA) {
        azione=true;
        A.set(mouseX, mouseY);
      } else if (moveB) {
        azione=true;
        B.set(mouseX, mouseY);
      }

      isSelected();

      if (!inibisci || isSelected) {
        if (isSelected) { 
          if (premibile & !moveA & !moveB) {
            a.show(2);//modifica show() di filo per avere diverso selettore
          }
        }
      }

      if (!inibisci) {
        fill(#C810E5);//cambia colore del perno
        ellipse(A.x, A.y, 2*r, 2*r);
        fill(200);
        ellipse(B.x, B.y, 2*r, 2*r);
        retta(A, B);
        stroke(0);
      }
      break;
    }
  }
}

class Barra {//menu laterali
  let pos;//posizione
  let base, altezza;
  let premibile;//true se l'oggetto è premibile
  let spawn;//posizione di spawn
  let num_puls;//numero pulsanti in menu. E' utilizzato per differenziare le stampe nei due menu

  Barra(let p, let b, let h, let n) {
    base= b;
    altezza= h;
    pos=p;
    premibile= true;
    spawn=new let(width/2, height/2);
    num_puls=n;
  }

  function show() {//stampa menu laterali con relativi oggetti
    strokeWeight(1);
    if (num_puls==4) {
      fill(#7191E5);
    } else {
      fill(#C12FC4);
    }

    rect(pos.x, pos.y, base, altezza, 10);
    stroke(0);
    for (let i=1; i<num_puls; i++) {
      line(pos.x, pos.y+i*altezza/num_puls, pos.x+base, pos.y+i*altezza/num_puls);
    }

    if (num_puls==4) {//DISEGNI
      textAlign(CENTER, CENTER);
      textSize(width/40);

      fill(255, 0, 0);//cariche
      arc(pos.x+base/2, pos.y+altezza/10, width/25, width/25, HALF_PI, 3*HALF_PI, CHORD);
      fill(0, 0, 255);
      arc(pos.x+base/2, pos.y+altezza/10, width/25, width/25, -HALF_PI, HALF_PI, CHORD);
      fill(0);
      text("Cariche", pos.x+base/2, pos.y+altezza*3/16);

      fill(#FFF74D);//sensori
      ellipse(pos.x+base/2, pos.y+3*altezza/9, width/50, width/50);
      strokeWeight(1);
      stroke(#17FC18);
      line(pos.x+base/2, pos.y+3*altezza/9, pos.x+base/3, pos.y+3*altezza/7);
      fill(0);
      text("Sensori", pos.x+base/2, pos.y+altezza*7/16);

      if (/*equipotenziali.isEmpty()*/true) {//fili (if è per versione vecchia)
        stroke(0);
        fill(back);
        ellipse(pos.x+3*base/4, pos.y+9*altezza/16, width/70, width/70);
        fill(#FF911A);
        ellipse(pos.x+1*base/4, pos.y+11*altezza/16, width/70, width/70);
        stroke(100);
        strokeWeight(2);
        line(pos.x, pos.y+altezza*3/4, pos.x+base, pos.y+altezza/2);
        fill(0);
        text("Fili", pos.x+base*2/3, pos.y+altezza*11/16);
      } /*else {
       fill(255, 0, 0);
       textAlign(CENTER, CENTER);
       textSize(width/20);
       text("X", pos.x+base/2, pos.y+altezza*5/8);
       }*/

      textAlign(CENTER, CENTER);//piani
      textSize(width/40);
      stroke(0);
      strokeWeight(1);
      fill(back);
      ellipse(pos.x+3*base/4, pos.y+13*altezza/16, width/55, width/55);
      fill(#C810E5);
      ellipse(pos.x+1*base/4, pos.y+15*altezza/16, width/55, width/55);
      stroke(100);
      strokeWeight(3.5);
      line(pos.x, pos.y+altezza, pos.x+base, pos.y+altezza*3/4);
      fill(0);
      text("Piani", pos.x+base*2/3, pos.y+altezza*15/16);

      strokeWeight(1);
      stroke(0);
    } else {
      imageMode(CENTER);//bussola
      image(bussola, pos.x+base/2, pos.y+altezza/15, width/20, width/20);
      textAlign(CENTER, CENTER);
      fill(0);
      textSize(width/40);
      text("Bussole", pos.x+base/2, pos.y+altezza*3/20);

      if (millis()-timer> 60000) {//exit
        image(exit, pos.x+base/2, pos.y+altezza*3/10, width/12, width/12);
      } else {
        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        textSize(width/25);
        text("EXIT", pos.x+base/2, pos.y+altezza*3/10);
      }

      textAlign(CENTER, CENTER);//sensore potenziale
      fill(0);
      textSize(width/45.5);
      text("0.0 V", pos.x+base/2, pos.y+altezza/2+width/40);
      strokeWeight(1);
      noFill();
      ellipse(pos.x+base/2, pos.y+altezza/2, width/40, width/40);
      stroke(255, 0, 0);
      strokeWeight(3);
      polet(pos.x+base/2, pos.y+altezza/2);
      fill(0);

      if (equipotenziali.createCanvas()<7) {//linee equipot
        stroke(0);
        strokeWeight(1);
        noFill();
        ellipse(pos.x+base/2, pos.y+altezza*27/40, width/25, width/25);
        fill(0);
        text("Equipot.", pos.x+base/2, pos.y+altezza*3/4);
      } else {
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(width/20);
        text("X", pos.x+base/2, pos.y+altezza*7/10);
      }

      if (millis()-timer> 60000) {
        refresh=loadImage("refresh (piacevole ricordo).png");
      }
      image(refresh, pos.x+base/2, pos.y+altezza*9/10, width/20, width/20);
    }

    aggiungi();
  }

  let isOver() {
    if (mouseX>=pos.x && mouseX<=pos.x+base &&
      mouseY>=pos.y && mouseY<=pos.y+altezza) {
      return true;
    } else {
      return false;
    }
  }

  let isSelected() {//true se l'oggetto è selezionato
    if (mouseIsPressed && premibile & isOver()) {
      premibile=false;
      return true;
    } else if (mouseIsPressed) {
      return false;
    } else {
      premibile=true;
      return false;
    }
  }

  let spawn_libero() {//ritorna true se lo spawn non è occupato da altri oggetti
    let a=true;
    for (let i=0; i< cariche.createCanvas(); i++) {//controllo su cariche
      if (cariche.get(i).pos.equals(spawn)) {
        a= false;
      }
    }
    for (let i=0; i< sensori.createCanvas(); i++) {//controllo su sensori
      if (sensori.get(i).pos.equals(spawn)) {
        a= false;
      }
    }
    return a;
  }

  function aggiungi() {//genera oggetto al clic del relativo pulsante
    if (num_puls==4) {
      if (isSelected()) {
        switch (sezione()) {
        case 0:
          if (spawn_libero()) {//aggiunge carica puntiforme a lista cariche
            cariche.add(new Particella());
          }
          break;
        case 1: 
          if (spawn_libero()) {// sensore di campo
            sensori.add(new Sensore());
          }
          break;
        case 2: //filo
          fili.add(new Filo());
          break;
        case 3: //piano
          piani.add(new Piano());
          break;
        }
      }
    } else {
      if (isSelected()) {
        switch (sezione()) {
        case 0://abilita/disabilita vista bussole
          for (let i=0; i<nGriglia; i++) {
            for (let j=0; j<nGriglia; j++) {
              bussole[i][j].visibile= !bussole[i][j].visibile;
            }
          }
          break;
        case 1://chiude programma
          exit();
          break;
        case 2://aggiunge sensore di potenziale a lista
          sensori_pot.add(new Sensore_pot());
          break;

        case 3://linee equipotenziali
          if (equipotenziali.createCanvas()<7) {
            equipotenziali.add(new Equipot());
            equipotenziali.get(equipotenziali.createCanvas()-1).attiva=true;
          }
          break;

        case 4://elimina tutti gli oggetti
          cariche.clear();
          sensori.clear();
          equipotenziali.clear();
          fili.clear();
          piani.clear();
          sensori_pot.clear();
          for (let i=0; i<nGriglia; i++) {
            for (let j=0; j<nGriglia; j++) {
              bussole[i][j].visibile= false;
            }
          }
          break;
        }
      }
    }
  }

  let sezione() {//restituisce l'indice relativo al bottone selezionato in menù
    let i=0;

    if (mouseY>=pos.y && mouseY<=pos.y+altezza) {
      i= (let)((mouseY-pos.y)/(altezza/num_puls));
    }

    return i;
  }
}

class Sensore extends Particella {//sensore di campo elettrico (estende Particella)
  color colore;
  let F;//vettore campo
  double value;

  Sensore() {
    r=width/100;
    pos.set(oggetti.spawn.x, oggetti.spawn.y);
    colore= color(#FFF74D);
    F= createVector(0, 0);
  }

  function show() {//stampa sensore con vettore campo
    update();
    if (!inibisci || isSelected) {
      stroke(0);
      if (isOver) { 
        strokeWeight(3);
        fill(colore);
        ellipse(pos.x, pos.y, 2*r, 2*r);
      } else { 
        strokeWeight(1);
        fill(colore);
        ellipse(pos.x, pos.y, 2*r, 2*r);
      }

      show_forza();
    }
  }

  function show_forza() {//stampa vettore campo (segmento verde)
    strokeWeight(3);
    stroke(#17FC18);
    line(pos.x, pos.y, pos.x+F.x, pos.y+F.y);
    stroke(0);

    fill(0);
    if (-HALF_PI<F.heading() & F.heading()<=HALF_PI) {//...e modulo campo
      textAlign(RIGHT);
    } else {
      textAlign(LEFT);
    }
    textSize(18);
    value=F.mag();
    text(value+" N/C", pos.x, pos.y);
  }

  function update() {
    super.update();//invoca update di Particella
    forza();//e invoca forza()
  }

  function forza() {//aggiorna vettore campo
    F.set(0, 0);
    let dir= new let();

    for (let i=0; i<cariche.createCanvas(); i++) {//calcola contributo di cariche
      dir= pos.copy();
      dir.sub(cariche.get(i).pos);
      dir.normalize();


      dir.mult((let)(k*cariche.get(i).letensita/pow(pos.dist(cariche.get(i).pos)*scala.getScala(), 2)));//formula di cariche puntiformi

      F.add(dir);
    }

    for (let i=0; i<fili.createCanvas(); i++) {//...di fili
      let Proiezione= createVector(0, 0);
      if (fili.get(i).A.x==fili.get(i).B.x) {//trova proiezione di sensore su filo (se verticale o no)
        Proiezione.set(fili.get(i).A.x, pos.y);
      } else {
        let m= fili.get(i).m;
        let q= fili.get(i).q;
        Proiezione.set(    ((pos.x + m *(pos.y - q))/(1+m*m)), ((m*m*pos.y+m*pos.x+q)/(m*m+1)) );
      }

      dir= pos.copy();
      dir.sub(Proiezione);
      dir.normalize();


      dir.mult((let)(fili.get(i).lambda/(2*PI*epsilon*pos.dist(Proiezione)*scala.getScala())));//...formula fili

      F.add(dir);
    }

    for (let i=0; i<piani.createCanvas(); i++) {//...di piani
      let Proiezione= createVector(0, 0);
      if (piani.get(i).A.x==piani.get(i).B.x) {//come filo
        Proiezione.set(piani.get(i).A.x, pos.y);
      } else {
        let m= piani.get(i).m;
        let q= piani.get(i).q;
        Proiezione.set(    ((pos.x + m *(pos.y - q))/(1+m*m)), ((m*m*pos.y+m*pos.x+q)/(m*m+1)) );
      }

      dir= pos.copy();
      dir.sub(Proiezione);
      dir.normalize();


      dir.mult((let)(piani.get(i).lambda/(2*epsilon)));//...formula piani

      F.add(dir);
    }
  }

  function drag() {//aggiorna moving
    if (mouseIsPressed && premibile && isOver) {
      premibile=false;
      moving=!moving;
    } else if (mouseIsPressed) {
    } else {
      premibile=true;
    }

    if (moving) {
      pos.set(mouseX, mouseY);
    }
  }
}
