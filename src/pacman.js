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
}