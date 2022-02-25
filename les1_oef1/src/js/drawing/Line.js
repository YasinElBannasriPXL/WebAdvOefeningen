import Point from './Point'

export default class Line {
    constructor(point1, point2) {
        if (point1 instanceof Point && point2 instanceof Point) {
            this._point1 = point1;
            this._point2 = point2;
        } else {
            throw new Error('Not a point object');
        }
    }

    get point1() {
        return this._point1;
    }
    get point2() {
        return this._point2;
    }

    toString() {
        return `point1: ${this._point1} point2: ${this._point2}`;
    }
}