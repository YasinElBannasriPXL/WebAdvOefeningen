"use strict";
import Course from './Course';
// naam: 
export default class Student{
    constructor(id) {
        this._id = id;
        this._courses = [];
    }
    addCourse(params) {
        if (params instanceof Course) {
            this._courses.push(params);
        } else {
            console.log("Not a course!")
        }

    }
    calculateGrade() {
        let sum = 0;
        let amountCompleted = 0;
        console.log(this._courses)
        this._courses.forEach(course => {
            if (course.completed == true) {
                console.log(`SUM IS:${sum} \nAMOUNT COMPLETED:${amountCompleted}`)
                amountCompleted++;
                sum += course.grade;
            }
        });
        if (amountCompleted === 0) {
            throw new Error('error amount completed');
        } else {
            return sum / amountCompleted;
        }

    }

}
