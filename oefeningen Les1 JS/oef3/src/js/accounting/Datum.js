"use strict";

export default class Datum {
    static #MONTHS=['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep','oct', 'nov', 'dec'];
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    static make(day, month, year) {
        return new Datum(day, month, year);
    }

	getDay() {
		return this._day;
	}

	setDay(day) {
		this._day = day;
	}

	getMonth() {
		return this._month;
	}

	setMonth(month) {
		this._month = month;
	}

	getYear() {
		return this._year;
	}

	setYear(year) {
		this._year = year;
	}


    toString() {
        return `${this._day}/${this._month}/${this._year}`;
    }

    toStringMonth() {
        return `${this._day}/${Datum.#MONTHS[this._month - 1]}/${this._year}`;
    }

    
}