"use strict"

import Point from '../game/Point'

export default class WereldObject {
    constructor(location) {
        if (location instanceof Point) {
            this._location = location;
        } else {
            throw new Error('Not a valid point object')
        }
    }

    getX() {
        return this._location.x
    }

    setX(x) {
        if (typeof x !== 'number') {
            throw new Error('x was not a number')
        } else {
            this._location = new Point(x, this._location.y)
        }
    }

    getY() {
        return this._location.y
    }

    setY(y) {
        if (typeof y !== 'number') {
            throw new Error('y was not a number')
        } else {
            this._location = new Point(this._location.x, y)
        }
    }
}