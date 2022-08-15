/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let excuses = document.getElementById("excuses");

const random = arr => {
  return Math.floor(Math.random() * arr.length);
};

const concatArr = () => {
  return who[random(who)]
    .concat(" ")
    .concat(what[random(what)])
    .concat(" ")
    .concat(when[random(when)]);
};

excuses.innerHTML = concatArr();
