import { Exchange } from "../models/Exchange";
import { Exchanges } from "../models/Exchanges";
import { ExchangesView } from "../views/ExchangesView";
import { MessageView } from "../views/MessageView";

export class ExchangeController {

    private _inputDate: JQuery;
    private _inputQuant: JQuery;
    private _inputValue: JQuery;
    private _exchanges = new Exchanges();
    private _exchangesView = new ExchangesView('#exchangesView');
    private _menssageView = new MessageView('#messageView');

    constructor() {
        this._inputDate = $('#date');
        this._inputQuant = $('#quant');
        this._inputValue = $('#value');

       // updates the view to display the model data, empty
        this._exchangesView.update(this._exchanges);
    }

    add(event: Event) {

        event.preventDefault();

        const exchange = new Exchange(
            new Date(this._inputDate.val().replace(/-/g, ',')), 
            parseInt(this._inputQuant.val()),
            parseFloat(this._inputValue.val())
        );

        this._exchanges.add(exchange);

        // since adding, updates a view again to reflect the data
        this._exchangesView.update(this._exchanges);
        this._menssageView.update('Added successfully!');
    }
}