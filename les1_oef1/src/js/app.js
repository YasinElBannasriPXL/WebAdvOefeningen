"use strict";

import Point from './drawing/Point';
import ColorPoint from './drawing/ColorPoint';
import Line from './drawing/Line';

window.addEventListener('load', (event) => {
    let point=new Point(1,2);
    let preElement=document.createElement('pre');
    let textNode=document.createTextNode(point+'\n' );

    let colorPoint=new ColorPoint(1,2,'red');
    let textNode2=document.createTextNode(colorPoint);

    preElement.appendChild(textNode) ;
    preElement.appendChild(textNode2) ;
    document.getElementById('output').appendChild(preElement);
    let point2 = new Point(5, 6);
    let line = new Line(point, point2);
    let preElement2 = document.createElement('pre');
    let textNodePoint = document.createTextNode(line.toString());
    preElement2.appendChild(textNodePoint);
    document.getElementById('output').appendChild(preElement2);
});





