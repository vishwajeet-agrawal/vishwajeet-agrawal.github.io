var correct = 0;
var total = 0;
const colors = ["rgb(170,0,0)", "rgb(0,170,0)", "rgb(0,0,170)"];
const colors1 = ["rgb(80,0,0)", "rgb(0,80,0)", "rgb(0,0,80)"];
const colors2 = ["rgb(160,0,0)", "rgb(0,160,0)", "rgb(0,0,160)"];
const colorcodes = ["R", "G", "B"];
var ci = -1;
var started = 0;
var T = "";
var P = "";
const white = "rgb(255,255,255)";
const keyinfo = document.getElementById("keyinfo");
const clickinfo = document.getElementById("clickinfo");
const result = document.getElementById("result");
const results = document.getElementById("results");

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
        T = "";
        P = "";
        results.style.display = "none";
        keyinfo.style.display = "none";  
        clickinfo.style.display = "none";
        setTimeout(nextColor, 500);

    }
    else if (event.key==' ' && started==1){
        // show results
        started = 0;
        document.body.style.backgroundColor = white;
        results.style.display = "block";
        keyinfo.style.display = "block";
        clickinfo.style.display = "block";
        document.getElementById("true").textContent = T;
        document.getElementById("pred").textContent = P;
        result.textContent = "Correct: "+ correct.toString() + ", Total: " + total.toString() + ", Accuracy: " + (correct/total).toFixed(2).toString();
        // isclick = true;
    }
    else if (started == 1){
        var i = -1;
        switch(event.key){
            case '1':
                i = 0;
                break;
            case '2':
                i = 1;
                break;
            case '3':
                i = 2;
                break;
            default:
        }
        if (i>-1){
            total += 1;
            if (ci==i){
                correct += 1;
            }
            document.body.style.backgroundColor = colors1[i];
            P = P.concat(" ").concat(colorcodes[i]);
            T = T.concat(" ").concat(colorcodes[ci]);
        }
        
        
        // document.body.style.backgroundColor = colors1[0]; 
        // if (event.key == '1'){
        //     P.concat(" ").concat(colorcodes[0])
        //     if (ci==0){
        //         correct += 1;
        //     }
        //     total += 1;
        //     document.body.style.backgroundColor = colors1[0]; 
        // }
        // else if (event.key=='2'){
        //     P.concat(" ").concat(colorcodes[1]);
        //     if (ci==1){
        //         correct += 1;
        //     }
        //     total += 1;
        //     document.body.style.backgroundColor = colors1[1]; 
        // }
        // else if (event.key=='3'){
        //     P.concat(" ").concat(colorcodes[2]);
        //     if (ci==2){
        //         correct += 1;
        //     }
        //     total += 1;
        //     document.body.style.backgroundColor = colors1[2]; 
        // }
        setTimeout(nextColor, 500);
    }  
}


