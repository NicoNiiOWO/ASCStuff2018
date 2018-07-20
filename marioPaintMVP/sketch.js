function setup(){
    createCanvas(1000, 700);
    fill('red');
    quad(20,20 , 20,60 , 60,60 , 60,20);
    fill('green');
    quad(80,20 , 80,60 , 120,60 , 120,20);
    fill('blue');
    quad(140,20 , 140,60 , 180,60 , 180,20);
    fill('lightgray')
    quad(980,20 , 980,60 , 900,60 , 900,20);
    fill('black');
    textFont('Comic Sans MS')
    text("Reset", 925,44);
    color = undefined;
}
let color;
function mouseDragged(){
    if(color == undefined){
        fill(random(0,255),random(0,255),random(0,255));
    }else if(color == "red"){
        fill('red');
    }else if(color == "green"){
        fill('green')
    }else if(color == "blue"){
        fill('blue')
    }
    
    let shape = Math.floor(Math.random()*2)
    if(shape == 0){
        ellipse(mouseX, mouseY, random(10,15), random(10,15));
    }else if(shape == 1){
        rect(mouseX-7, mouseY-7, random(10,15), random(10,15));
    }
}

function mouseClicked(){
    if(mouseX >= 20 && mouseX <= 60 && mouseY >= 20 && mouseY <= 60){
        color = "red";
    }else if(mouseX >= 80 && mouseX <= 120 && mouseY >= 20 && mouseY <= 60){
        color = "green";
    }else if(mouseX >= 140 && mouseX <= 180 && mouseY >= 20 && mouseY <= 60){
        color = "blue";
    }else if(mouseX >= 900 && mouseX <= 980 && mouseY >= 20 && mouseY <=60){
        setup();
    }
}