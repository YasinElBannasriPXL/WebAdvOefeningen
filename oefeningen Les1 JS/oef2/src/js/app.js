"use strict";

import Hero from "./game/Hero";
import Point from "./game/Point";

window.addEventListener('load', (event) => {
    let point = new Point(96, 24);

    let hero = new Hero(point);

    printPreElement(hero.location);

    // hero.moveRight();
    // hero.moveDown();
    hero.moveUp();
    hero.moveLeft();

    printPreElement(hero.location);


});


function printPreElement(thingToPrint) {
    let preElement=document.createElement('pre');
    let textNode=document.createTextNode(thingToPrint + '\n');
    preElement.appendChild(textNode) ;
    document.getElementById('output').appendChild(preElement);
}