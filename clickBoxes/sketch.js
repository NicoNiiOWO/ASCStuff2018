function setup(){
    createCanvas(600, 600);
    fill("blue");
    rect(0,0,300,600);
    rect(300,0,300,600);
}

let colorL = "b", colorR = "b";

function mouseClicked(){
    if(mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 600){
        if(colorL == "b"){
            fill("red");
            rect(0,0,300,600);
            colorL = "r";
        }else{
            fill("blue");
            rect(0,0,300,600);
            colorL = "b";
        }
    }else if(mouseX > 300 && mouseX < 600 && mouseY > 0 && mouseY < 600){
        if(colorR == "b"){
            fill("red");
            rect(300,0,300,600);
            colorR = "r";
        }else{
            fill("blue");
            rect(300,0,300,600);
            colorR = "b";
        }
    }
}