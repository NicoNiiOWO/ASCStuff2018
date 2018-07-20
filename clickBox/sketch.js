let color = "blue"
function square(){
    fill(color);
    rect(0,0,600,600);
}
function setup(){
    createCanvas(600,600);
    square();
}

function mouseClicked(){
    if(color == "blue"){
        color = "red";
        square();
    }else if(color == "red"){
        color = "blue";
        square();
    }
}

function keyPressed(){
    if(keyCode == 32){
        mouseClicked();
    }
}