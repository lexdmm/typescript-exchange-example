import { Exchange} from "./index";
import { Printable } from "./Printable";

// app/js/models/Negociacao.js
export class Exchanges implements Printable {

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
