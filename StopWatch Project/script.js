// Code is written by Sanand N R
let btn1 = document.getElementById("start_btn");
let btn2 = document.getElementById("pause_btn");
let btn3 = document.getElementById("reset_btn");
let time = document.getElementById("time");

//adding event listeners to all buttons
btn1.addEventListener("click" , Start);
btn2.addEventListener("click" , Pause);
btn3.addEventListener("click" , Reset);

let check = false;
let check_for_start = false;
//Defining Start function
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let event_value;
let ms, s , m , h;

function Start() {
    if(check_for_start === true) return;

    check = true;
    check_for_start = true;
    event_value = setInterval(function(){
        milliSeconds += 5;
        if(milliSeconds === 1000) {
            milliSeconds = 0;
            seconds++;
        }
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24) {
            Reset();
        }

        //-> change to string <-

        //for milliseconds
        if(milliSeconds < 10) {
            ms = "00" + milliSeconds;
        }
        else if(milliSeconds < 100) {
            ms = "0" + milliSeconds;
        }
        else {
            ms = milliSeconds;
        }

        // for seconds
        if(seconds < 10) {
            s = "0" + seconds;
        }
        else {
            s = seconds;
        }

        // for minutes
        if(minutes < 10) {
            m = "0" + minutes;
        }
        else {
            m = minutes;
        }

        // for hours
        if(hours < 10) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }

        time.innerHTML = h + " : " + m + " : " + s + " : " + ms;
    },5)
}

//Defining Pause function
function Pause() {
    if(check === false) return;
    clearInterval(event_value);
    start_btn.innerText = "RESUME";
    check_for_start = false;
}

//Defining Reset function
function Reset() {
    check = false;
    check_for_start = false;
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.innerHTML = "00 : 00 : 00 : 000";
    clearInterval(event_value);
    start_btn.innerText = "START";   
}


