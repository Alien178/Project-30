class Polygon {
    constructor(x, y, radius, npoints) {
        var options ={
            density : 1.5,
            restitution: 0.5,
            friction: 1.0
        }

        this.body =  Bodies.polygon(x, y, radius, npoints * 4, options);
        this.radius = radius;
        this.npoints = npoints;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke(64, 0, 0);
        fill(127, 0, 0);
        //scale(5);
        polygon(0, 0, this.radius, this.npoints);
        //polygon(0, 0, 200, 6);
        pop();
    }

}