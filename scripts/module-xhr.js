"use strict";

const animalLoader = require("./animal");

const carnivoreContainer = document.getElementById("carnivore-container");
const herbivoreContainer = document.getElementById("herbivore-container");

console.log("show carnivore function", animalLoader.loadCarnivores);
console.log("show herbivore function", animalLoader.loadHerbivores);

function showCarnivores(carnivores) {
    console.log("the showCarnivores callback function was fired!");
    console.log("this should be the carnivores array", carnivores);
    console.log("carnivores.length", carnivores.length);
    for (let i = 0; i < carnivores.length; i++){
        let parentNode = document.createElement("p");
        let animalName = document.createTextNode(carnivores[i].name);
        console.log(carnivores[i].name);
        parentNode.appendChild(animalName);
        carnivoreContainer.appendChild(parentNode);
    }
}

function showHerbivores(herbivores) {
    for (let i = 0; i < herbivores.length; i++) {
        let parentNode = document.createElement("p");
        let animalName = document.createTextNode(herbivores[i].name);
        parentNode.appendChild(animalName);
        herbivoreContainer.appendChild(parentNode);
    }
    
}


animalLoader.loadCarnivores(showCarnivores);
animalLoader.loadHerbivores(showHerbivores);