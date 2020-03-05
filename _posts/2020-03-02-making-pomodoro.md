---
layout: post
title:  "Making Pomodoro"
categories: Programming
image: "../images/tomato.jpg"
description: "Brad Burzon's Pomodoro Timer. Come check out this project. He will talk about his journey making a simple page with Pomodoro timer."
---
If you haven't already seen it, checkout my [Pomodoro Timer here.](/projects/pomodoro)
<div class="text-center">
<a href="../../projects/pomodoro"><img class="img-fluid" src="../../images/pomodoro.JPG"></a>
</div>
The purpose of this app is to be able to utilize the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) which design to set work intervals with rests in between.
<br>
<br>
## Design
I was inspired to do something with [Neomorphism (or Neomorphic UI)](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6). It is minimal and simple.
Other than that, I had to figure out a way to enable toggling the buttons to show which current timer is running. Thankfully, Bootstrap has the Group Toggle which I used.   
<br>

## Tools Used
To make the Pomodoro page, I used **HTML, CSS with Bootstrap, and JS**. I haven't learned advanced frameworks yet so it is pure js. I also tried to dabble with Jest testing but I am still
far from mastering it
<br >

### HTML + CSS
I used a page template for my website so **most of the work here was creating the buttons, divs, logs, and understanding some [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).** (Document Object Model)

For example,

<!--button cluster-->
```html
HTML
<div class="..." id="timers" data-toggle="buttons">
  <label class="..." onclick="...">
    <input type="radio" name="options" id="pomo" autocomplete="off"> Pomodoro
    ...
  </label>
</div>
```
This is the code for the three timer buttons that is set above the timer. The div has a class _btn-group-toggle_ from Bootstrap which toggles a button when pressed, making it easy for the user to know which timer is on.
<br >
<br >
### JS
Here is where it gets interesting where many things come to play. Since this is a timer, it will deal with time and so I used the *Date Object*.
```javascript
JS
var currentDate = new Date();
console.log(currentDate);
// prints Mon Mar 02 2020 21:57:35 GMT-0500 (Eastern Standard Time)

console.log(currentDate.getMinutes());
//prints 57

console.log(currentDate.getSeconds());
//prints 35
```
Using the current date, the timer I wrote will continue to tick until the future date which is the date plus the addedMinutes is equal to the current. For example, for Pomodoro, I add 25 minutes to the dateEndingAt and that is when my timer will stop as it is compared with the currentDate by how much seconds are left. Below is how the HTML is connected with Javascript using **document.getElementsById()**.
```html
HTML
<!--clock message display-->
<h1 class="text-center" id="demo"></h1>
```
<br>
```javascript
JS
//saves the document to manipulate
var clock = document.getElementById('demo');

  //changes occurs inside and calls changeClock
function myTimer() {
  ...
  changeClock(clockStr);
  ...
}

//change the value of clock
function changeClock(clockStr){
  clock.innerHTML = clockStr;
}
```
<br>
Lastly, I think the coolest thing about this timer is that there is a log where you can see your timers when they start, end, or reset. Similar to how I change the timer, I use document.getElementById() but also created a new div element. Check out the snippet below.
<br>
```html
HTML
<!--log display-->
<div class="text-center" id="log">...</div>
```
<br>
```javascript
JS
//saves the document to manipulate
function printLog(newLog){
  if(typeof newLog == "string"){

    //create a new div called para, give it class="text-center"
    var para = document.createElement("DIV");
    para.setAttribute("class", "text-center");

    //sets the value of div <div class="text-center">newLog</div>
    para.innerHTML = newLog;

    //gets the div with id="log" shown above and adds the para div inside
    document.getElementById("log").appendChild(para);
  }
}
```
<br>
<br>
## Mistakes were made
### 1) Not Testing in the beginning
I definitely had a lot of debugging time which jumped all over the place. I wish I knew more about testing like I do with JUnit with Java. Towards the end, I used Jest and did some tests.
But I am not as proficient in it so I will work harder towards that.
### 2) Not committing to GitHub regularly
I put up on [GitHub](https://github.com/bradburzon) yet I didn't commit regularly. I had the mentality of "Commit when everything is done."
This is a mistake because I should've save to keep track of the state of my code in case something happen(accidently deleting all code), and the way I was developing wasn't focused.
With Jekyll, there are temporary website files that is generated when you want to run your site locally and I was working on that. I didn't save it on my original file so I lost those changes.
Luckily, I was able to redo them again and save in the right file. Furthermore, I was coding everything at the same time meaning I didn't have a focused mindset.
It should've been focused like "Today, I will work only on display" so in that regards, it won't be chaotic like my experience.
<br>
<br>
# Conclusion
It was truly fun. Knowing HTML, CSS, and JS, there is so much things to do. Plus, there's more advance stuff I need to learn and want to try. I hope I can go back to this project and set up advance features when I have learned more so I hope you can check that out too!
