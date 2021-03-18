class Ball{
  constructor(xpos, ypos,c){
    this.xpos = xpos;
    this.ypos = ypos;
    this.col = c;
    this.speedX = random(2.5,3.5);
    this.speedY = random(2.5,3.5);
    this.acc = 1;
    this.n = true;
    this.morte = false;
  }
  update() {
    if ((frameCount % 60 == 0) && (this.acc>0) && this.n) this.acc -= 0.01; 
    else if ((frameCount % 60 == 0) && (this.acc>0) && !this.n) this.acc -= 0.03; 

    if (this.acc <= 0) this.morte = true;
    this.xpos += (this.speedX * this.acc);
    if ((this.xpos > ((2*width/3)-15)) || (this.xpos < 15)) this.speedX = this.speedX * -1;
    this.ypos += (this.speedY * this.acc);
    if ((this.ypos > (height-15)) || (this.ypos < 15)) this.speedY = this.speedY * -1;
  }
  sano() {
    fill(this.col);
    noStroke(); 
    ellipse(this.xpos, this.ypos, 15, 15);
  } 
  malato() {
    fill(this.col);
    strokeWeight(3);
    stroke (255);
    ellipse(this.xpos, this.ypos, 15, 15);
  }
  portatrice() {
    fill(this.col);
    noStroke();
    ellipse(this.xpos, this.ypos, 15, 15);
  }
  getx(ascissa) {
    ascissa = this.xpos;
    return ascissa;
  }
  gety(ordinata) {
    ordinata = this.ypos;
    return ordinata;
  }
  nascita() {
    return n = false;
  }
  getbirth(birth) {
    birth = this.n;
    return birth;
  }
  getdeath(death) {
    death = this.morte;
    return death;
  }
}

let t, e, i, j, k, f, figli, cont, vari, num_mutati, mod = 0, xgrafico; 
let c1, c2, c3, c4, c5, c = 1;
let balls = [];
let gen = [];
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];
let data5 = [];
let col;
let a = true, n1, n2, n, death, m, gene;
let regolacolore1 = true, regolacolore2 = true, regolacolore3 = true, regolacolore4;
let  x, y, x1, y1, x2, y2, d;
let font1; 

function mousePressed(){
  return true;
}
function keyPressed(){
  return true;
}
function setup(){
  createCanvas(1080, 720);
  background(0);
  frameRate(60);
  font1 = loadFont("CaviarDreams.ttf");
  for (i=0; i<40; i++) {
    t = random(0, 2);
    if (t == 0) {
      gen.set(i, "XY");
      col = 255;
    }
    if (t == 1) {
      gen.set(i, "XX");
      col = (255,135,35);
    }
    x = random(15, ((2*width/3)-15));
    y = random(15, (height-15));
    balls.push(new Ball(x, y, col));
  } 
}
function draw(){
   if (mod == 0) {
    background(0);
    fill(255,0,0);
    textAlign(CENTER); 
    textFont(font1, 40);
    text("Ereditarietà delle mutazioni", width/2, 80); 
    strokeWeight(2);
    stroke(255,0,0);
    line(386, 100, 978, 100);
    
    textSize(28);
    textAlign(LEFT);
    fill(0,0,255);
    noStroke(); 
    ellipse(100, 210, 25, 25);
    text("Individuo maschio sano", 150, 220);

    fill(0,0,255);
    strokeWeight(2); 
    stroke(255);
    ellipse(100, 275, 25, 25);
    text("Individuo maschio malato", 150, 285);

    fill(255,139,195);
    noStroke();
    ellipse(100, 340, 25, 25);
    text("Individuo femmina sana", 150, 350);

    fill(255,139,195);
    strokeWeight(5); 
    stroke(255);
    ellipse(100, 405, 25, 25);
    text("Individuo femmina malata", 150, 415);

    fill(254,0,255);
    noStroke();
    ellipse(100, 470, 25, 25);
    text("Individuo femmina portatrice", 150, 480);

//visualizzazione del rettangolo grigio contenente i comandi principali della simulazione
    fill(190);
    rect(800, 198, 440, 284);
    textSize(17);
    fill(255);
    text("Premi 'm' per far comparire la mutazione", 818, 238);
    text("Premi 'g' per far riprodurre gli indivdui", 818, 278);
    textSize(19);
    fill(255, 0, 0);
    text("Premi 's' per avviare la simulazione", 818, 318);


    textSize(28);    
    fill(255);
    text("Quanti individui vuoi mutare?", 150, 660);
     if (mousePressed() || !regolacolore1 || !regolacolore2 || !regolacolore3) {
      if ((mouseX >= 750 && mouseX <= 800 && mouseY >= 625 && mouseY <= 675) || !regolacolore1) {
        num_mutati = 10;
        rect(750, 625, 50, 50);
        regolacolore1 = false;
        regolacolore2 = true;
        regolacolore3 = true;
      }

      if ((mouseX >= 850 && mouseX <= 900 && mouseY >= 625 && mouseY <= 675) || !regolacolore2) {
        num_mutati = 20;
        rect(850, 625, 50, 50);
        regolacolore1 = true;
        regolacolore2 = false;
        regolacolore3 = true;
      }

      if ((mouseX >= 950 && mouseX <= 1000 && mouseY >= 625 && mouseY <= 675) || !regolacolore3) {
        num_mutati = 30;
        rect(950, 625, 50, 50);
        regolacolore1 = true;
        regolacolore2 = true;
        regolacolore3 = false;
      }
    }
     
    fill(255, 0, 0);
    text("10", 760, 660);
    text("20", 860, 660);
    text("30", 960, 660);
    

    fill(255);
    text("Scegli il tipo di mutazione", 150, 730);
    
    if (mousePressed || !regolacolore4 || !regolacolore5) {
      if (mouseX >= 650 && mouseX <= 850 && mouseY >= 695 && mouseY <= 745 || !regolacolore4) {
        gene = false;
        rect(650, 695, 200, 50);
        regolacolore4 = false;
        regolacolore5 = true;
      }

      if (mouseX >= 900 && mouseX <= 1100 && mouseY >= 695 && mouseY <= 745 || !regolacolore5) {
        gene = true;
        rect(900, 695, 200, 50);
        regolacolore4 = true;
        regolacolore5 = false;
      }
    }
    textAlign(CENTER);
    fill(255, 0, 0);
    text("Dominante", 750, 700);
    text("Recessiva", 970, 700);
    
    if (keyPressed()) {
      if (key == 's') {
        mod = 1;
        frameCount = 0;
      }
    }
   }
  //ifmod1
 if (mod == 1) {

    background(0);
    textAlign(LEFT);
    fill(255);
    rect (2*width/3, 0, width/3, height);
    stroke(0);
    strokeWeight(4);
    line ((2*width/3)+40, 40, (2*width/3)+40, 2*height/3);      //asse y del grafico
    line ((2*width/3)+40, 2*height/3, width-40, 2*height/3);    //asse x del grafico
    fill (5,17,255) ;
    noStroke();
    rect ((2*width/3)+40, (2*height/3)+40, (width/3)-80, 200);  //layout della tabella

//layout della tabella: categoria degli individui, valore del contatore e percentuale degli individui sul totale
    textSize(24);
    fill(255);
    text ("Totale individui: " + c, (2*width/3)+50, (2*height/3)+70);
    text ("Maschi sani: " + c1, (2*width/3)+50, (2*height/3)+100);
    text (((c1*100)/c) + "%", (2*width/3)+360, (2*height/3)+100);
    text ("Maschi malati: " + c2, (2*width/3)+50, (2*height/3)+130);
    text (((c2*100)/c) + "%", (2*width/3)+360, (2*height/3)+130);
    text ("Femmine sane: " + c3, (2*width/3)+50, (2*height/3)+160);
    text (((c3*100)/c) + "%", (2*width/3)+360, (2*height/3)+160);
    text ("Femmine malate: " + c4, (2*width/3)+50, (2*height/3)+190);
    text (((c4*100)/c) + "%", (2*width/3)+360, (2*height/3)+190);
    text ("Femmine portatrici: " + c5, (2*width/3)+50, (2*height/3)+220);
    text (((c5*100)/c) + "%", (2*width/3)+360, (2*height/3)+220);

//La condizione cambia il valore di mod e permette il passaggio alla schermata conclusiva
    if (balls.size() == 0) {mod = 2;}

//azzeramento dei contatori, necessario per il corretto conteggio degli individui
    c = 0;
    c1 = 0;
    c2 = 0;
    c3 = 0;
    c4 = 0;
    c5 = 0;

/*Il ciclo for scorre l'ArrayList e applica la funzione update a ciascuna pallina. 
Il display viene regolato in base alla lettura del genoma corrispondente nello StringList*/
    for (j=0; j < balls.size(); j++) {
      let b = balls.get(j);
      b.update();

      if (gen.get(j) == "xx") {
        b.malato();
        c4++;
      }

      if (gen.get(j) == "xY") {
        b.malato();
        c2++;
      }

      if (gen.get(j) == "XX") {
        b.sano();
        c3++;
      }
      if (gen.get(j) == "XY") {
        b.sano();
        c1++;
      }

      if (gen.get(j) == "xX") {
        if (gene) {
          b.portatrice();
          c5++;
        }
        if (!gene) {
          b.malato();
          c4++;
        }
      }


//Quando una pallina raggiunge velocità nulla viene eliminata dall'arrayList. Di conseguenza viene eliminato il genoma corrispondente
      if (b.getdeath(death)) {
        balls.remove(j);
        gen.remove(j);
      }
    }

//Inserimento dei valori dei contatori all'interno degli IntList corrispondenti
    if (frameCount % 60 == 0) {
      data1.append(c1);
      data2.append(c2);
      data3.append(c3);
      data4.append(c4);
      data5.append(c5);
    }

//Il numero di individui c è dato dalla somma dei singoli contatori
    c = c1 + c2 + c3 + c4 + c5;


/*Generazione delle colonne del grafico, in cui l'altezza è direttamente 
proporzionale al numero di individui (ogni contatore è moltiplicato per 4)*/
    noStroke();
    textSize(20);
    fill(0, 255, 0);
    rect ((2*width/3)+42, (2*height/3)-(c*4)-1, 55, c*4);  //individui totali
    text ("tot", (2*width/3)+52, (2*height/3)+20);

    fill(0, 0, 255);              
    rect ((2*width/3)+97, (2*height/3)-(c1*4)-1, 55, c1*4);  //maschi sani
    text ("ms", (2*width/3)+112, (2*height/3)+20);

    fill(46,176,240);              
    rect ((2*width/3)+152, (2*height/3)-(c2*4)-1, 55, c2*4);  //maschi malati
    text ("mm", (2*width/3)+162, (2*height/3)+20);

    fill(255,139,195);              
    rect ((2*width/3)+207, (2*height/3)-(c3*4)-1, 55, c3*4);  //femmine sane
    text ("fs", (2*width/3)+225, (2*height/3)+20);

    fill(250,184,227);              
    rect ((2*width/3)+262, (2*height/3)-(c4*4)-1, 55, c4*4);  //femmine malate
    text ("fm", (2*width/3)+277, (2*height/3)+20);

    fill(254,0,255);              
    rect ((2*width/3)+317, (2*height/3)-(c5*4)-1, 55, c5*4);  //femmine portatrici
    text ("fp", (2*width/3)+333, (2*height/3)+20);

//Quando si preme il tasto ENTER, il genoma degli individui sani viene modificato: comparsa della mutazione
    if (keyPressed) {
      if (key == 'm') {
        for (j=0; j < num_mutati; j++) {
          if ( gen.get(j) == "XX") {
            gen.set(j, "xx");
          }
          if ( gen.get(j) == "XY") {
            gen.set(j, "xY");
          }
        }
      }
    }
    
//Quando si preme il tasto 'g', la variabile booleana a cambia stato e permette l'ingresso nella condizione successiva
    if (keyPressed) {
      if (key == 'g') {
        a= false;
      }
    }

/*Controlliamo ogni pallina e verifichiamo che se entrambe non sono genitori e la loro distanza è minore di 15
(ossia la somma dei raggi) controlliamo i genomi corrispondenti. Nel caso in cui ci sia un maschio e una femmina 
viene generato un numero di figli casuale (compreso tra 1 e 2), i cui genomi assecondano le leggi probabilistiche
della genetica mendeliana. Di conseguenza verranno visualizzati con il layout corrispondente.*/
    if (!a) {
      for (j=0; j < balls.size(); j++) {
        let b1 = balls.get(j);
        x1 = b1.getx(x);
        y1 = b1.gety(y);
        n1 = b1.getbirth(n);
        for (i=0; i<balls.size(); i++) {
          let b2 = balls.get(i);
          x2 = b2.getx(x);
          y2 = b2.gety(y);
          n2 = b2.getbirth(n);
          d = dist(x1, y1, x2, y2);
          if (d <= 15 && n1 && n2) {
            figli = random(1, 3);
            vari = 0;

            if ( ((gen.get(j) == "XX") && (gen.get(i) == "XY")) || ((gen.get(i) == "XX") && (gen.get(j) == "XY"))) {      //1, individui entrambi sani
              for (cont = 0; cont < figli; cont++) {
                e = random(0, 2);
                if (e == 0) {
                  gen.set((gen.size()), "XY");
                  col = (0,0,255);
                }
                if (e == 1) {
                  gen.set((gen.size()), "XX");
                  col = (255,139,195);
                }
                balls.add(new Ball(width/3 + vari, height/2, col));
                vari += 100;
              }  
              b1.nascita();  //quando la pallina fa figli assume lo stato di "genitore" attraverso la funzione nascita
              b2.nascita();
            } else if ( ((gen.get(j) == "xx") && (gen.get(i) == "XY")) || ((gen.get(i) == "xx") && (gen.get(j) == "XY"))) {      //2, femmina malata, maschio sano
              for (cont = 0; cont < figli; cont++) {
                e = random(0, 2);
                if (e == 0) {
                  gen.set((gen.size()), "xY");
                  col = (0,0,255);
                }
                if (e == 1) {
                  gen.set((gen.size()), "xX");
                  col = (254,0,255);
                }
                balls.add(new Ball(width/3 + vari, height/2, col));
                vari += 100;
              }
              b1.nascita();
              b2.nascita();
            } else if ( ((gen.get(j) == "xX") && (gen.get(i) == "XY")) || ((gen.get(i) == "xX") && (gen.get(j) == "XY"))) {      //3, femmina portatrice, maschio sano 
              for (cont = 0; cont < figli; cont++) {
                f = random(0, 4);
                if (f == 0) {
                  gen.set((gen.size()), "XY");
                  col = (0,0,255);
                }
                if (f == 1) {
                  gen.set((gen.size()), "XX");
                  col = (255,139,195);
                }
                if (f == 2) {
                  gen.set((gen.size()), "xX");
                  col = (254,0,255);
                }
                if (f == 3) {
                  gen.set((gen.size()), "xY");
                  col = (0,0,255)
                }
                balls.add(new Ball(width/3 + vari, height/2, col));
                vari += 100;
              }
              b1.nascita();
              b2.nascita();
            } else if ( ((gen.get(j) == "XX") && (gen.get(i) == "xY")) || ((gen.get(i) == "XX") && (gen.get(j) == "xY"))) {      //4 femmina sana, maschio malato
              for (cont = 0; cont < figli; cont++) {
                e = random(0, 2);
                if (e == 0) {
                  gen.set((gen.size()), "XY");
                  col = (0,0,255);
                } else if (e == 1) {
                  gen.set((gen.size()), "xX");
                  col = (254,0,255);
                }
                balls.add(new Ball(width/3 + vari, height/2, col));
                vari += 100;
              }
              b1.nascita();
              b2.nascita();
            } else if ( ((gen.get(j) == "xx") && (gen.get(i) == "xY")) || ((gen.get(i) == "xx") && (gen.get(j) == "xY"))) {      //5  individui entrambi malati
              for (cont = 0; cont < figli; cont++) {
                e = random(0, 2);
                if (e == 0) {
                  gen.set((gen.size()), "xY");
                  col = (0,0,255);
                }
                if (e == 1) {
                  gen.set((gen.size()), "xx");
                  col = (255,139,195);
                }
                balls.add(new Ball(width/3 + vari, height/2, col));
                vari += 100;
              }
              b1.nascita();
              b2.nascita();
            } else if ( ((gen.get(j) == "xX") && (gen.get(i) == "xY")) || ((gen.get(i) == "xX") && (gen.get(j) == "xY"))) {       // 6 femmina portatrice, maschio malato
              for (cont = 0; cont < figli; cont++) {
                f = random(0, 4);
                if (f == 0) {
                  gen.set((gen.size()), "XY");
                  col =(0,0,255);
                } else if (f == 1) {
                  gen.set((gen.size()), "xx");
                  col = (255,139,195);
                } else if (f == 2) {
                  gen.set((gen.size()), "xX");
                  col = (254,0,255);
                } else if (f == 3) {
                  gen.set((gen.size()), "xY");
                  col = (0,0,255);
                }
                balls.add(new Ball(width/3 + vari, height/2, col));
                vari += 100;
              }
              b1.nascita();
              b2.nascita();
            }
          }
        }
      }
    }
  }  //ifmod2 
  if (mod == 2) {
    background(255);
    stroke(0);
    strokeWeight(4);
    line (40, 40, 40, height-40);                 //asse y del grafico
    line (40, height-40, width-40, height-40);    //asse x del grafico

    beginShape();
    noFill();
    k=0;
    for (xgrafico = 0; xgrafico < data1.size(); xgrafico++) {      //grafico ms
      stroke(0, 0, 255);
      strokeWeight(4);
      vertex(xgrafico*10+40, ((height-40)-(data1.get(k)*10)));
      k++;
    }
    endShape();

    beginShape();
    noFill();
    k=0;
    for (xgrafico = 0; xgrafico < data2.size(); xgrafico++) {    //grafico mm
      stroke(46,176,240);
      strokeWeight(4);
      vertex(xgrafico*10+40, ((height-40)-(data2.get(k)*10)));
      k++;
    }
    endShape();

    beginShape();
    noFill();
    k=0;
    for (xgrafico = 0; xgrafico < data3.size(); xgrafico++) {   //grafico fs
      stroke(255,139,195);
      strokeWeight(4);
      vertex(xgrafico*10+40, ((height-40)-(data3.get(k)*10)));
      k++;
    }
    endShape();

    beginShape();
    noFill();
    k=0;
    for (xgrafico = 0; xgrafico < data4.size(); xgrafico++) {    //grafico fm
      stroke(250,184,227);
      strokeWeight(4);
      vertex(xgrafico*10+40, ((height-40)-(data4.get(k)*10)));
      k++;
    }
    endShape();

    beginShape();
    noFill();
    k=0;
    for (xgrafico = 0; xgrafico < data5.size(); xgrafico++) {    //grafico fp
      stroke(254,0,255);
      strokeWeight(4);
      vertex(xgrafico*10+40, ((height-40)-(data5.get(k)*10)));
      k++;
    }
    endShape();
    noLoop();
  }
}
