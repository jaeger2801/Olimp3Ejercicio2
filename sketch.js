let fantasmaNaranja = new FantasmaNaranja(350,300,1,255,255,0);
let fantasmaAmarillo = new FantasmaAmarillo(200,0,1,255,255,0);
let fantasmaVerde = new FantasmaVerde(100,100,0,0,255,0);
let fantasmaRojo = new FantasmaRojo(300,0,1,0,0,1);
let pacman = new Pacman (20, 100);
var bolitas = [];


function setup() {
  createCanvas(400, 400);

  for(var i = 0; i < 13; i++){
    for(var j = 0; j < 13; j++) {
      bolitas.push(new Bolitas(i*31,j*45));
    }
  }
      

   console.log(bolitas);
}
  
     


function draw() {
  background(30);

  /*for(let i = 0; i < bolitas.length; i++) {
    bolitas[i].show();
    
  }*/
  /*for(let i = 0; i < fantasmaAmarillo.length; i++)
  if(pacman.Comer(fantasmaAmarillo.x, fantasmaAmarillo.y)){
    pacman.setcomide(true);
    console.log("se la comió")
  }*/

  fantasmaVerde.mostrar()
  fantasmaAmarillo.mostrar()
  fantasmaRojo.mostrar()
  fantasmaNaranja.mostrar()
  fantasmaRojo.mover()
  fantasmaVerde.mover()
  fantasmaAmarillo.mover()
  fantasmaNaranja.mover()
 
  fantasmaVerde.getx();

  pacman.mostrar();

  if (dist(pacman.x, pacman.y, fantasmaAmarillo.x, fantasmaAmarillo.y)<20) {
    fantasmaAmarillo.setAlive(false);
    console.log("watafac pacman, te la comiste")
  }

 

 
  }

function keyPressed(){
  pacman.mover(key)
}


  




