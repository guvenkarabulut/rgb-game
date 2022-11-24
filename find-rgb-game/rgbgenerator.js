var colors = [];
var validRgb; 
var squaresNum=6;

var colorDisplay=document.querySelector("#color-display");
var squares = document.querySelectorAll(".square");

init();

function init() {
	makeColors();
    validRgb=colors[Math.floor(Math.random()*6)];
	squareColors();
    colorDisplay.textContent=validRgb;
}
function reset(){
    squareColors();
}


function makeColors(){
    for(var i=0;i<squaresNum;i++){
        colors.push(makeRGB());
    }
}

function squareColors(){
    for(var i=0;i<squaresNum;i++){
		squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clickColor=this.style.backgroundColor;
            if(clickColor==validRgb){
                for(var i=0;i<squaresNum;i++){
                    squares[i].style.backgroundColor=clickColor;
                }
                if (confirm("Correct please press confirm for restart.")) {
                    reset();
                    init();
                  } else {
                    txt = "okey";
                  }
            }
            else{
                this.style.backgroundColor=("#232323");
            }
        });
    }
}

function makeRGB(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return ("rgb("+r+", "+g+", "+b+")");
}
