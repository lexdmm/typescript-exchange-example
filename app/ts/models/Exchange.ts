export class Exchange {
    
    constructor(readonly date: Date, readonly quant: number, readonly value: number) {}

    get volume() {
        return this.quant * this.value;
    }
}