import { Printable } from "./index";

export class Exchange extends Printable {    
    constructor (readonly date: Date, readonly quant: number, readonly value: number) {
        super(); // the super only has the method getText()
    }

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