function setup(){
    createCanvas(600, 600);
    background(0);
}
let x = Math.floor(Math.random()*600), y = Math.floor(Math.random()*600), zx=Math.floor(Math.random()*2), zy=Math.floor(Math.random()*2), speed=1;

function draw(){
    background(0);
    ellipse(x, y, 15);
    if(zx==0){
        x=x+speed;
    }if(x>=width){
        zx=1;
        x=width;
        speed=speed+0.25;
    }if(zx==1){
        x=x-speed;
    }if(x<=0){
        zx=0;
        x=0;
        speed=speed+0.25;
    }

    if(zy==0){
        y=y+speed;
    }if(y>=height){
        zy=1;
        y=height;
        speed=speed+0.25;
    }if(zy==1){
        y=y-speed;
    }if(y<=0){
        zy=0;
        y=0;
        speed=speed+0.25;
    }

}
function mouseClicked(){
    if(mouseX>=x-10 && mouseX<=x+10 && mouseY>=y-10 && mouseY<=y+10){
        fill(random(50,255),random(50,255),random(50,255));
    }
}