import { IPrintable } from "../interfaces/IPrintable";

export class Exchange implements IPrintable {    
    constructor (readonly date: Date, readonly quant: number, readonly value: number) { }

    get volume() {
        return this.quant * this.value;
    }

    public getText(): void {
        console.log('-- getText --');
        console.log(
            `Date: ${this.date}
            Quantities: ${this.quant}, 
            Value: ${this.value}, 
            Volume: ${this.volume}`
        );
    }
}