class Bolitas {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
    }
    
    show(){
        noStroke();
        fill(245,245,220);
        ellipse(this.x + 10, this.y + 10, this.radius, this.radius);
    }
}