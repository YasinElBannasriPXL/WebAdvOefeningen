"use strict";

import WereldObject from "./WereldObject";

export default class Hero extends WereldObject {
    constructor(location) {
        super(location);
    }

    moveDown() {
        super.setY(super.getY() - 1);
    }

    moveUp() {
        super.setY(super.getY() + 1);
    }

    moveLeft() {
        super.setX(super.getX() - 1)
    }

    moveRight() {
        super.setX(super.getX() + 1)
    }

    get location() {
        return `X${super.getX()} - Y${super.getY()}`
    }
}