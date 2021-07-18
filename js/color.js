var correct = 0;
var total = 0;
const colors = ["rgb(170,0,0)", "rgb(0,170,0)", "rgb(0,0,170)"];
const colors1 = ["rgb(80,0,0)", "rgb(0,80,0)", "rgb(0,0,80)"];
const colors2 = ["rgb(160,0,0)", "rgb(0,160,0)", "rgb(0,0,160)"];

var ci = -1;
var started = 0;

const white = "rgb(255,255,255)";
const keyinfo = document.getElementById("keyinfo");
const clickinfo = document.getElementById("clickinfo");
const result = document.getElementById("result");


function nextColor() {
    ci = Math.floor(Math.random()*3);
    document.body.style.backgroundColor = colors[ci];
}
function nextColorClick() {
    i = Math.floor(Math.random()*3);
    document.body.style.backgroundColor = colors2[i];
    setTimeout(function(){
        document.body.style.backgroundColor = colors[i];
    }, 200)
}

document.querySelector('body').onkeypress = function(event){
    if (event.key == ' ' && started==0){
        started = 1;
        correct = 0;
        total = 0;
        // isclick = true;
        result.textContent = "";
        keyinfo.style.display = "none";  
        clickinfo.style.display = "none";
        setTimeout(nextColor, 500);

    }
    else if (event.key==' ' && started==1){
        started = 0;
        document.body.style.backgroundColor = white;
        keyinfo.style.display = "block";
        clickinfo.style.display = "block";
        result.textContent = "Correct: "+ correct.toString() + ", Total: " + total.toString() + ", Accuracy: " + (correct/total).toFixed(2).toString();
        // isclick = true;
    }
    else if (started == 1){
        if (event.key == '1'){
            if (ci==0){
                correct += 1;
            }
            total += 1;
            document.body.style.backgroundColor = colors1[0]; 
        }
        else if (event.key=='2'){
            if (ci==1){
                correct += 1;
            }
            total += 1;
            document.body.style.backgroundColor = colors1[1]; 
        }
        else if (event.key=='3'){
            if (ci==2){
                correct += 1;
            }
            total += 1;
            document.body.style.backgroundColor = colors1[2]; 
        }
        setTimeout(nextColor, 500);
    }  
}


