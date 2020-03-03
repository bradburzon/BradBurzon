
//timer display
var clock = document.getElementById('demo');
//alarm
var alarm = document.getElementById("myAudio");
//stores the timer, when its defined, timer starts
//timer = setInterval(myTimer, 1000);
var timer;
//used to calculate how much time left
var totalSec;
var totalSecNeeded;
//minutes that will be added to dateEndingAt;
var addedMinutes;
//date right now
var currentDate;
// use this to save the old date to stop timer
var dateEndingAt;
//time left in seconds
var time = 0;
//tells state of timer, true = running : false = stopped
let started = false;
var currTimer = "";

//saves current date in terms of minutes and seconds, adds addedMinutes to set value
//of totalSecNeeded then compare to currentDate. when time == 0, or the dates are the site_name
//timer stops, plays alarm, and reset
function myTimer() {
  // add addedMinutes to dateEndingAt which will be a date in the future
  totalSecNeeded = ((dateEndingAt.getMinutes() + addedMinutes) * 60 ) + dateEndingAt.getSeconds();

  // saving current date
  var currentDate = new Date();
  let hour = currentDate.getHours() - dateEndingAt.getHours();
  totalSec = (((hour * 60) + currentDate.getMinutes()) * 60) + currentDate.getSeconds();
  // compare total seconds of future date and current date
  time = totalSecNeeded - totalSec;
  //sets maximum time limit to 25 min (1500 sec)

  //change value of demo to minutes and seconds into 00:00 format
  var minutes = Math.floor(time / 60);
  minutes = minutes > 9 ? minutes : "0" + minutes;
  var seconds = time % 60;
  seconds = seconds > 9 ? seconds : "0"+ seconds;
  let clockStr = "";
  if(time > 0){
    clockStr = minutes + ":" + seconds;
  } else {
    clockStr = "TIMES UP!!";
  }
  changeClock(clockStr);

  //stops the countdown at time = 0;
  // play alarm, change clock display, and create a log
  if(time == 0){
    printLog(finishLog());
    started = false;
    resetCountdown();
    alarm.play();
  }
}

// changes the clock to 25:00, set currTimer to Pomodoro, set added minutes to 25
function pomodoro(){
  if(currTimer != "Pomodoro"){
    resetCountdown();
    changeClock('25:00');
    currTimer = "Pomodoro";
    addedMinutes = 25;
  }
  return { currTimer: "Pomodoro", addedMinutes:25};
}
// set currTimer to Sh, set added minutes to 25
function shortBreak(){
  if(currTimer != "Short Break"){
    resetCountdown();
    changeClock('05:00');
    currTimer = "Short Break";
    addedMinutes = 5;
  }
  return { currTimer: "Short Break", addedMinutes:5};
}

function longBreak(){
  if(currTimer != "Long Break"){
    resetCountdown();
    changeClock('10:00');
    currTimer = "Long Break";
    addedMinutes = 10;
  }
  return { currTimer: "Long Break", addedMinutes:10};
}

//stop timer immediately, no two timer are allowed at the same time
function stopCountdown(){
  clearInterval(timer);
}

//close any timer
// other wise starts the Timer
// based on the added minutes
// and create a log of the timer
function startCountdown(){
  if(currTimer == ""){
    changeClock("No Timer Selected");
  } else{
    //if start coundown hasnt started, start it then set started to true
    if(!started){
      dateEndingAt = new Date();
      myTimer();
      started = true;
      timer = setInterval(myTimer, 1000);
      //creates a new div with class "text-center" for the log
      printLog(startLog());
      //starts the time
    }
  }
}

//reset the clock, timer, and  alarm
function resetCountdown(){
  stopCountdown();
  if(started){
    started = false;
    if(time > 0){
      printLog(stopLog());
    }
  }
  time = 0;
  //removes the toggle
  $('label').removeClass('active');
  changeClock("00:00");
  addedMinutes = 0;
  alarm.pause();
  currTimer ="";
  return{time: time, addedMinutes:addedMinutes, currTimer:currTimer};
}

//change display clock message
function changeClock(clockStr){
  clock.innerHTML = clockStr;
  return {clockStr:clockStr};
}

//adds log to the screen
function printLog(newLog){
  if(typeof newLog == "string"){
    var para = document.createElement("DIV");
    para.setAttribute("class", "text-center");
    para.innerHTML = newLog;
    document.getElementById("log").appendChild(para);
  }
}

function startLog(){
  let hourStartedAt = dateEndingAt.getHours();
  let sign = hourStartedAt >= 12 ? "PM" : "AM";
  hourStartedAt = hourStartedAt % 12;
  hourStartedAt = hourStartedAt > 9 ? hourStartedAt : "0" + hourStartedAt;
  let minuteStartedAt = dateEndingAt.getMinutes();
  minuteStartedAt = minuteStartedAt > 9 ? minuteStartedAt : "0" + minuteStartedAt;
  let secondStartedAt = dateEndingAt.getSeconds();
  secondStartedAt = secondStartedAt > 9 ? secondStartedAt : "0" + secondStartedAt;
  return currTimer + " start -------- " + hourStartedAt + ":" + minuteStartedAt + ":" + secondStartedAt + " " +sign;
}
function stopLog(){
  let min = Math.floor(time / 60);
  min = min > 9 ? min : "0" + min;
  let sec = time % 60;
  sec = sec > 9 ? sec : "0"+ sec;
  return currTimer + " reset -------- " + min + ":" + sec + " left.";
}
function finishLog(){
  var currentDate = new Date();
  let hour = currentDate.getHours();
  let sign = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour > 9 ? hour : "0" + hour;
  let min = currentDate.getMinutes();
  min = min > 9 ? min : "0" + min;
  let sec = currentDate.getSeconds();
  sec = sec > 9 ? sec : "0"+ sec;
  return currTimer + " finish ------- " + hour + ":" + min + ":" + sec + " " + sign;
}

//TESTING UNCOMMENT
//module.exports = { alarm, shortBreak, longBreak, changeClock, time, started, printLog, stopLog, stopCountdown, clock, pomodoro, currTimer, addedMinutes};
