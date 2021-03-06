import { Exchange} from "./index";
import { IPrintable } from "../interfaces/IPrintable";

// app/js/models/Negociacao.js
export class Exchanges implements IPrintable {

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
}
