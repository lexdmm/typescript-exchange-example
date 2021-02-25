export class Exchange {
    
    constructor(private _date: Date, private _quant: number, private _value: number) {}

    get date() {
        return this._date;
    }

    get quant() {
        return this._quant;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._quant * this._value;
    }
}