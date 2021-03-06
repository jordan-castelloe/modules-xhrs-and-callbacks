"use strict";

let carnivores = [];
let herbivores = [];

function loadCarnivores (callbackToInvoke) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        carnivores = JSON.parse(event.target.responseText);
        carnivores = carnivores.animals;
        callbackToInvoke(carnivores);
    });
    request.open("GET", "./scripts/carnivores.json");
    request.send();
}

function loadHerbivores (callbackToInvoke) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        herbivores = JSON.parse(event.target.responseText);
        herbivores = herbivores.animals;
        callbackToInvoke(herbivores);
    });
    request.open("GET", "./scripts/herbivores.json");
    request.send();
}

module.exports = {loadCarnivores, loadHerbivores};
