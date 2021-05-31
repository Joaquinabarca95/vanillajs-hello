/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finshed",
    "during my lunch",
    "while I was praying"
  ];
  document.getElementById("excuse").innerHTML = [
    r(who),
    r(action),
    r(what),
    r(when)
  ].join(" ");
  function r(list) {
    return list.splice(Math.floor(Math.random() * list.length), 1)[0];
  }
};
