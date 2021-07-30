var correct = 0;
var total = 0;
const colors = ["rgb(170,0,0)", "rgb(0,170,0)", "rgb(0,0,170)"];
const colors1 = ["rgb(80,0,0)", "rgb(0,80,0)", "rgb(0,0,80)"];
const colors2 = ["rgb(160,0,0)", "rgb(0,160,0)", "rgb(0,0,160)"];
const colorcodes = ["R", "G", "B"];
const symcodes = ['\u2190', '\u2193', '\u2192']

var ci = -1;
var started = 0;
var T = "";
var P = "";
var is_color = false;
var is_symbol = false;
var is_feedback = false;
const white = "rgb(255,255,255)";
const keyinfo = document.getElementById("keyinfo");
const syminfo = document.getElementById("syminfo");
const clickinfo = document.getElementById("clickinfo");
const result = document.getElementById("result");
const results = document.getElementById("results");
const exp = document.getElementById("exp");
function nextColor() {
    document.getElementById("trialnum").textContent = (total+1).toString();
    ci = Math.floor(Math.random()*3);
    document.body.style.backgroundColor = colors[ci];
}
function nextSym() {
    document.getElementById("trialnum").textContent = (total + 1).toString()
    ci = Math.floor(Math.random()*3)
    document.getElementById("sym_trial").textContent = symcodes[ci]
}
function nextColorClick() {
    if (is_color && started===0){
        document.getElementById("main").style.display = "none";
        i = Math.floor(Math.random()*3);
        document.body.style.backgroundColor = colors2[i];
        setTimeout(function(){
            document.body.style.backgroundColor = colors[i];
        }, 200)
    }
}
function colorclick() {
    is_color = true
    if (is_symbol)
        is_symbol = false
    document.getElementById("select").style.display = "none"
    document.getElementById("color_main").style.display = "block"
}
function symbolclick() {
    is_symbol = true
    if (is_color)
        is_symbol = false
    document.getElementById("select").style.display = "none"
    document.getElementById("symbol_main").style.display = "block"
}
document.querySelector('body').onkeydown = function(event){
    if (is_symbol){
        console.log(event.key)
        if (event.keyCode===32 && started===0){
            // First space
            started = 1
            correct = 0
            total = 0
            T = ""
            P = ""
            results.style.display = "none"
            syminfo.style.display = "none"
            exp.style.display = "block"
            setTimeout(nextSym, 500);
            if (confirm('Do you want feedback of your input?')) {
                is_feedback = true
                // Save it!
                // console.log('Thing was saved to the database.');
              } else {
                // Do nothing!
                is_feedback = false
                // console.log('Thing was not saved to the database.');
              }
        }
        else if (event.keyCode===32 && started===1){
            document.getElementById("symbol_main").style.display = "block";
            started = 0
            document.getElementById("sym_trial").textContent = " "
            results.style.display="block"
            syminfo.style.display="block"
            exp.style.display="block"
            document.getElementById("true").textContent = T
            document.getElementById("pred").textContent = P
            result.textContent = "Correct: "+ correct.toString() + ", Total: " + total.toString() + ", Accuracy: " + (correct/total).toFixed(2).toString();
        }
        else if (started==1){
            if (event.keyCode===37){
                i=0;
            }
            else if (event.keyCode===40){
                i=1
            }
            else if (event.keyCode===39){
                i=2
            }
            if (i>-1){
                total += 1;
                if (ci==i){
                    correct += 1;
                }
                
                P = P.concat(" ").concat(symcodes[i]);
                T = T.concat(" ").concat(symcodes[ci]);
                if (is_feedback){
                    document.getElementById("sym_trial").textContent = symcodes[i]
                    // document.getElementById("sym_trial").style.color = "rgb(170,0,0)"
                    setTimeout(nextSym, 500);
                    // document.getElementById("sym_trial").style.color = "rgb(0,0,0)"
                }
                else{
                    nextSym()
                }
            }
        }
    }
}
document.querySelector('body').onkeypress = function(event){
    if (is_color){
        if (event.key == ' ' && started===0){
            started = 1;
            correct = 0;
            total = 0;
            // isclick = true;
            T = "";
            P = "";
            results.style.display = "none";
            keyinfo.style.display = "none";  
            clickinfo.style.display = "none";
            exp.style.display = "block";
            if (confirm('Do you want feedback of your input?')) {
                is_feedback = true
                // Save it!
                // console.log('Thing was saved to the database.');
            } else {
                // Do nothing!
                is_feedback = false
                // console.log('Thing was not saved to the database.');
            }
            setTimeout(nextColor, 500);
            
        }
        else if (event.key===' ' && started===1){
            // show results
            document.getElementById("main").style.display = "block";
            started = 0;
            document.body.style.backgroundColor = white;
            results.style.display = "block";
            keyinfo.style.display = "block";
            clickinfo.style.display = "block";
            exp.style.display = "none";
            document.getElementById("true").textContent = T;
            document.getElementById("pred").textContent = P;
            result.textContent = "Correct: "+ correct.toString() + ", Total: " + total.toString() + ", Accuracy: " + (correct/total).toFixed(2).toString();
            // isclick = true;
        }
        else if (started ===1){
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
                
                P = P.concat(" ").concat(colorcodes[i]);
                T = T.concat(" ").concat(colorcodes[ci]);
                if (is_feedback){
                    document.body.style.backgroundColor = colors1[i];
                    setTimeout(nextColor, 500);
                }
                else{
                    nextColor();
                }
                
            }
        }  
    }
}


