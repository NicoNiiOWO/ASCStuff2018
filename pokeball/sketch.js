function setup(){
    createCanvas(300, 300);
    background(225);
    strokeWeight(5);
    fill("white");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
    fill("red");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);
    noFill();
    ellipse(150, 150, 200, 200);
    fill("white");
    ellipse(150, 150, 50, 50);
    fill(0)
    ellipse(150, 150, 25, 25);
    
}