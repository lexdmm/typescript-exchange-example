import { IPrintable } from "../interfaces/IPrintable";
import { IObjectIsEqual } from "../interfaces/IObjectIsEqual";
import { Exchange } from "./Exchange";

// app/js/models/Negociacao.js
export class Exchanges implements IPrintable, IObjectIsEqual<Exchanges> {
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
