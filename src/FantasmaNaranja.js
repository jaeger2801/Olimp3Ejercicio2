class FantasmaNaranja extends Fantasma{

    constructor(x, y,dir,r,g,b){
        super(x,y);
        this.dir = dir;
        this.r = 235;
        this.g = 164;
        this.b = 52;
    }
    mostrar(){
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER);        
    }
    
    especial() {
        if (frameCount % 90 == 0) {
            this.cambiarDeDireccion();
        }
    }
    
    cambiarDeDireccion() {
        if(this.y <= 25 || this.y >= height-25 || this.x <= 25 || this.x >= width-25) {
            switch(this.dir) {
                case 0:
                    if(this.y <= 25) {
                        this.dir = 1
                    }
                    break;
    
                case 1:
                    if(this.y >= height-25) {
                        this.dir = 0;
                    }
                    break;
    
                case 2:
                    if(this.x >= width-25) {
                        this.dir = 3;
                    }
                    break;
    
                case 3:
                    if(this.x <= 25) {
                        this.dir = 2;
                    }
                    break;
            }
        } else {
            this.dir = int(random(4));
        }
        
    }
    mover() {
        switch (this.dir) {
            case 0:
                this.y--;
                if(this.y < 25) this.cambiarDeDireccion();
                break;
            case 1:
                this.y++;
                if(this.y > height-25) this.cambiarDeDireccion();

                break;
            case 2:
                this.x++;
                if(this.x > width-25) this.cambiarDeDireccion();

                break;
            case 3:
                this.x--;
                if(this.x < 25) this.cambiarDeDireccion();

                break;
                
        }
        this.especial();
    
    }
    
    
    }