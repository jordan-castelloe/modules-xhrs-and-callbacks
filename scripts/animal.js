"use strict";

let carnivores = [];
let herbivores = [];

function loadCarnivores (callbackToInvoke) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        carnivores = JSON.parse(event.target.responseText);
        callbackToInvoke(carnivores);
    });
    request.open("GET", "carnivores.json");
    request.send();
}

function loadHerbivores (callbackToInvoke) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        herbivores = JSON.parse(event.target.responseText);
        callbackToInvoke(herbivores);
    });
    request.open("GET", "herbivores.json");
    request.send();
}

module.exports = {loadCarnivores, loadHerbivores};
