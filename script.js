const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):

// Session Storage API
localStorage.setItem('bestScore', null);
localStorage.setItem('midScore', null);
localStorage.setItem('worstScore', null);
var bestScore = localStorage.getItem('bestScore');
var midScore = localStorage.getItem('midScore');
var worstScore = localStorage.getItem('worstScore');
document.querySelector("#first").innerHTML = bestScore;
document.querySelector("#second").innerHTML = midScore;
document.querySelector("#third").innerHTML = worstScore;
   function updateFirst(){
   if (theTimer < bestScore){
        bestScore = theTimer;
        localStorage.setItem('bestScore', bestScore);
        document.querySelector("#first").innerHTML = bestScore;
   }
}
    function updateSecond(){
   if (theTimer < midScore){
        midScore = theTimer;
        localStorage.setItem('midScore', midScore);
        document.querySelector("#second").innerHTML = midScore;
   }
}
    function updateThird(){
   if (theTimer < bestScore){
        worstScore = theTimer;
        localStorage.setItem('worstScore', worstScore);
        document.querySelector("#third").innerHTML = worstScore;
   }
}

// Random sentence to copy
const sentences = ["abcdefghijklmnopqrstuvwxyz", "The quick brown fox jumps over the lazy dog", "Pack my box with five dozen liquor jugs", "Never underestimate the power of a good book", "The early bird catches the worm, but the second mouse gets the cheese"];
var randSent = sentences[Math.floor(Math.random() * sentences.length)];
document.querySelector("#origin-text p").innerHTML = randSent;

// Run a standard minute/second/hundredths timer:
let [hundredths, seconds, minutes] = [0,0,0];
let timer = null;

function stopWatch(){
    hundredths++;
    if(hundredths == 100){
        hundredths = 0;
        seconds++;
        if(seconds == 60){
            seconds =0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let h = hundredths < 10 ? "0" + hundredths : hundredths;

    theTimer.innerHTML = m +":"+ s +":"+ h;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [hundredths, seconds, minutes] = [0,0,0];
    theTimer.innerHTML = "00:00:00";
}

// Match the text entered with the provided text on the page:
function checker(){
    check = testArea.toString();
    if(check = originText){
        testWrapper.style.borderColor = "green";
    }
}

// Start the timer:
testArea.addEventListener("keydown", watchStart);

// Reset everything:
resetButton.addEventListener("click", burnItDown)

function burnItDown(e){
    index = 0;
    document.querySelector("#test-area").value = "";
    testWrapper.style.borderColor = "grey";
    watchReset();
    var randsent = sentences[Math.floor(Math.random() * sentences.length)];
    document.querySelector("#origin-text p").innerHTML = randsent;
    let text = randSent.split("");
    let limit = randSent.length;
    key = undefined;
}
// Event listeners for keyboard input and the reset button:
let index = 0;
const text = randSent.split("");
let limit = randSent.length;

testArea.addEventListener("keydown", textCheck);
let key = undefined;
function textCheck(e){
    key = e.key;

    if (key != text[index] && key !== 'shift') {
        //Red border
        testWrapper.style.borderColor = "red";
        //index++;
    } 
    if (key == text[index]) {
        //Blue border
        testWrapper.style.borderColor = "blue";
        index++;
    }
    if (index === limit){
        watchStop();
        //testArea.blur();
        checker();
        updateFirst();
        updateSecond();
        updateThird();
    }
    /*
    if (key === 'Enter'){
        //Blue border
        testWrapper.style.borderColor = "blue";
        watchStop();
        testArea.blur();
        checker();
    }
    */

    // Session Storage API
localStorage.setItem('bestScore', null);
localStorage.setItem('midScore', null);
localStorage.setItem('worstScore', null);
var bestScore = localStorage.getItem('bestScore');
var midScore = localStorage.getItem('midScore');
var worstScore = localStorage.getItem('worstScore');
document.querySelector("#first").innerHTML = bestScore;
document.querySelector("#second").innerHTML = midScore;
document.querySelector("#third").innerHTML = worstScore;
   function updateFirst(){
   if (theTimer < bestScore){
        bestScore = theTimer;
        localStorage.setItem('bestScore', bestScore);
        document.querySelector("#first").innerHTML = bestScore;
   }
}
    function updateSecond(){
   if (theTimer < midScore){
        midScore = theTimer;
        localStorage.setItem('midScore', midScore);
        document.querySelector("#second").innerHTML = midScore;
   }
}
    function updateThird(){
   if (theTimer < bestScore){
        worstScore = theTimer;
        localStorage.setItem('worstScore', worstScore);
        document.querySelector("#third").innerHTML = worstScore;
   }
}
}

//testArea.addEventListener("keydown", textCheck);
