// app/js/models/Negociacao.js
class Exchanges {

    private _exchanges: Exchange[] = [];

    add(_exchange: Exchange) {
        this._exchanges.push(_exchange);
    }

    getArray(): Exchange[] {
        return [].concat(this._exchanges);
    }
}