"use strict";
// naam: 
export default class Course {
    constructor(id) {
        this._id = id;
        this._grade = 0;
        this._completed = true;
    } 
    set completed(completed) {
        this._completed = completed;
    }    
    get completed() {
        return this._completed;
    }
    set grade(grade) {
        this._grade = grade;
    }
    get grade() {
       return this._grade;
    }


}
