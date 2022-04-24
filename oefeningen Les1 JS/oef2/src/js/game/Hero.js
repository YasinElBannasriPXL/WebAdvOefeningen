"use strict";

import WereldObject from "./WereldObject";

export default class Hero extends WereldObject {
    constructor(location) {
        super(location);
    }

    moveDown() {
        super.setY(this.getY - 1);
    }

    moveUp() {
        super.setY(this.getY + 1);
    }

    moveLeft() {
        super.setX(this.getX - 1)
    }

    moveRight() {
        super.setX(this.getX + 1)
    }

    get location() {
        return `X${super.getX()} - Y${super.getY()}`
    }
}