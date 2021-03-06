import { IObjectIsEqual } from "../interfaces/IObjectIsEqual";
import { IPrintable } from "../interfaces/IPrintable";

export class Exchange implements IPrintable, IObjectIsEqual<Exchange> {    
    constructor (readonly date: Date, readonly quant: number, readonly value: number) { }

    get volume() {
        return this.quant * this.value;
    }

    getText(): void {
        console.log('-- getText --');
        console.log(
            `Date: ${this.date}
            Quantities: ${this.quant}, 
            Value: ${this.value}, 
            Volume: ${this.volume}`
        );
    }

    isObjetctEqual (exchange: Exchange): boolean {
        return this.date.getDate() == exchange.date.getDate()
            && this.date.getMonth() == exchange.date.getMonth()
            && this.date.getFullYear() == exchange.date.getFullYear();
    }
}
