(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let carnivores = [];
let herbivores = [];

function loadCarnivores (callbackToInvoke) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        carnivores = JSON.parse(event.target.responseText);
        callbackToInvoke(carnivores);
    });
    request.open("GET", "./scripts/carnivores.json");
    request.send();
}

function loadHerbivores (callbackToInvoke) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        herbivores = JSON.parse(event.target.responseText);
        callbackToInvoke(herbivores);
    });
    request.open("GET", "./scripts/herbivores.json");
    request.send();
}

module.exports = {loadCarnivores, loadHerbivores};

},{}],2:[function(require,module,exports){
"use strict";

console.log("hello!");

const animalLoader = require("./animal");
const carnivoreContainer = document.getElementById("carnivore-container");
const herbivoreContainer = document.getElementById("herbivore-container");


function showCarnivores(carnivores) {
    for (let i = 0; i < carnivores.length; i++){
        let parentNode = document.createElement("p");
        let animalName = document.createTextNode(carnivores[i][name]);
        parentNode.appendChild(animalName);
        carnivoreContainer.appendChild(parentNode);
    }
}

function showHerbivores(herbivores) {
    for (let i = 0; i < herbivores.length; i++) {
        let parentNode = document.createElement("p");
        let animalName = document.createTextNode(herbivores[i][name]);
        parentNode.appendChild(animalName);
        herbivoreContainer.appendChild(parentNode);
    }
    
}

animalLoader.loadCarnivores(showCarnivores);
animalLoader.loadHerbivores(showHerbivores);
},{"./animal":1}]},{},[2]);
