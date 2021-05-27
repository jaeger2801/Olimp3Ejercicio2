class Pacman {
    constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = 50
   
}

mostrar(){
    fill(225, 225, 0);
    ellipse(this.x, this.y, this.radius, this.radius);

}
mover(key){

    console.log(key);
      
    switch (key) {
        case 'a': //izquierda
            this.x = this.x -10
            break;
            
    }
    switch (key) {
        case 'd':
            this.x = this.x +10
            
            break;
    }
    switch (key) {
        case 'w':
            this.y = this.y -10
            
            break;   
}
switch (key) {
    case 's':
        this.y = this.y +10
        
        break;
}
}
}