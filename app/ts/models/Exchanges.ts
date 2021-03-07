import { Exchange } from "./Exchange";
import { IExchangeObject } from "../interfaces/IExchangeObject";

// app/js/models/Negociacao.js
export class Exchanges implements IExchangeObject<Exchanges> {
    private _exchanges: Exchange[] = [];

    add(exchange: Exchange) {
        this._exchanges.push(exchange);
    }

    getArray(): Exchange[] {
        return ([] as Exchange[]).concat(this._exchanges);
    }

    getText(): void {
        console.log('-- getText --');
        console.log(JSON.stringify(this._exchanges));
    }

    isObjetctEqual (exchanges: Exchanges): boolean {
        return JSON.stringify(this._exchanges) == JSON.stringify(exchanges.getText())
    }
}
