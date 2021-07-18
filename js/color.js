var correct = 0;
var total = 0;
const colors = ["rgb(170,0,0)", "rgb(0,170,0)", "rgb(0,0,170)"];
const colors1 = ["rgb(100,0,0)", "rgb(0,100,0)", "rgb(0,0,100)"];
var ci = -1;
var started = 0;
function nextColor() {
    ci = Math.floor(Math.random()*3);
    document.body.style.backgroundColor = colors1[ci];
    setTimeout(function(){
        document.body.style.backgroundColor = colors[ci];
    }, 500)
}
document.querySelector('body').onclick = function(){
    if (started==1){
        nextColor();
    }
}
document.querySelector('body').onkeypress = function(event){
    if (started == 1){
    if (event.key == '1'){
        if (ci==0){
            correct += 1;
        }
        total += 1;
    }
    else if (event.key=='2'){
        if (ci==1){
            correct += 1;
        }
        total += 1;
    }
    else if (event.key=='3'){
        if (ci==2){
            correct += 1;
        }
        total += 1;
    }
    nextColor();
}
}
const button = document.getElementById("button")
button.onclick = function(){
    if (started == 0){
        button.textContent = "End";
        started = 1;
    }
    else if (started == 1){
        button.textContent = "Correct: "+ correct.toString() + ", Total: " + total.toString() + ", Accuracy: " + (correct/total+1e-6).toFixed(2).toString();
        started = 2;
    }
    else if (started == 2){
        started = 0;
        button.textContent = "Start";
        correct = 0;
        total = 0;
    }
}