---
layout: post
title:  "Making Pomodoro"
categories: Programming
image: "../images/tomato.jpg"
description: "Here, I will talk about my journey making a simple page with Pomodoro timer."
---
If you haven't already seen it, checkout my [Pomodoro Timer here.](/projects/pomodoro)

The purpose of this app is to be able to utilize the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) which design to set work intervals with rests in between.
<br >
<br >
# Tools Used
To make the Pomodoro page, I used HTML, CSS with Bootstrap, and JS. I haven't learned advanced frameworks yet so it is pure js. I also tried to dabble with Jest testing but I am still
far from mastering it.
<br >
<br >
#### HTML + CSS
I used a page template for my website so **most of the work here was creating the buttons, divs, logs, and understanding some [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).** (Document Object Model)

For example,

<!--button cluster-->
```html
<div class="..." id="timers" data-toggle="buttons">
  <label class="..." onclick="...">
    <input type="radio" name="options" id="pomo" autocomplete="off"> Pomodoro
    ...
  </label>
</div>
```
This code for the three timer buttons that is set above the timer. The div has a class btn-group-toggle from Bootstrap which toggles a button when pressed, making it easy for the user to know which timer is on.
The label acts as my button.
<br >
<br >
#### JS
Here is where it gets interesting where many things come to play. Since this is a timer, it will deal with time and so I used the Date Object.
```javascript
var currentDate = new Date();
console.log(currentDate);
// prints Mon Mar 02 2020 21:57:35 GMT-0500 (Eastern Standard Time)
console.log(currentDate.getMinutes());
//prints 57
console.log(currentDate.getSeconds());
//prints 35
```
Using the current date, the timer I wrote will continue to tick until the future date I set which is how many the timer is set to. For example, for Pomodoro, I added 25 minutes to the dateEndingAt and that is when my timer will stop as I compare with the currentDate by how much seconds are left.
```html
</div>
<!--clock message display-->
<h1 class="text-center" id="demo"></h1>
```


```html
<!--log display-->
<div class="text-center" id="log">...</div>
```
