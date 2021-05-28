class Pacman {
    constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = 50
    this.dir = 0;
    this.comide = false;
   
}
setcomide(comide) {
    this.comide = comide;
  }


Comer(x1, y1){
if(dist(this.y, this.y, x1, y1)<70) {
    return true; }

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
mostrar(){
    fill(225, 225, 0);
    ellipse(this.x, this.y, this.radius, this.radius);

}
} 
