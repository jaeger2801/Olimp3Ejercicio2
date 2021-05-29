class Fantasma{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dir = 0;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.alive = true; // válido para todos los fantasmas
    }
    mostrar(){
        if(this.alive){
        fill(this.r,this.g,this.b);
        rectMode(CENTER);
        rect(this.x, this.y, 50,50);
        rectMode(CORNER); 
        this.especial();       
        }
    }

    especial(){
        
    }

    setAlive(isAlive){
        this.alive = isAlive;
    }

    mover(){
        if(this.alive){
        if(this.dir === 0){
            this.y--;
        }else{
            this,y++;
        }
        }
    }



    Amarillo(){
        FantasmaAmarillo.mostrar();
        FantasmaAmarillo.mover();
    }
    Rojo(){
        FantasmaRojo.mostrar();
        FantasmaRojo.mover();
    }
    Verde(){
        this.x = FantasmaVerde.x
        this.x = FantasmaVerde.y
        fill(0,255,0);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER);
    }
    Bolitas(){
        Bolitas.mostrar();
    }
    getx(){
        return this.x;
    }
    gety(){
        return this.y;
    }
}
