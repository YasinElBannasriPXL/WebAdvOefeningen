"use strict";

import Datum from "./accounting/Datum";

window.addEventListener('load', (event) => {
    let date = Datum.make(24, 4, 2022);
    printPreElement(date.toString());
    date.setMonth(1);
    printPreElement(date.toStringMonth());
});


function printPreElement(thingToPrint) {
    let preElement=document.createElement('pre');
    let textNode=document.createTextNode(thingToPrint + '\n');
    preElement.appendChild(textNode) ;
    document.getElementById('output').appendChild(preElement);
}