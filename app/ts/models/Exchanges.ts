import { RuntimeLog } from "../helpers/decorators/index";
import { Exchange } from "./Exchange";

// app/js/models/Negociacao.js
export class Exchanges {

    private _exchanges: Exchange[] = [];

    @RuntimeLog('s')
    add(_exchange: Exchange) {
        this._exchanges.push(_exchange);
    }

    @RuntimeLog('s')
    getArray(): Exchange[] {
        return ([] as Exchange[]).concat(this._exchanges);
    }
}
