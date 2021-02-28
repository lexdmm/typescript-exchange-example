import { DomInject } from "../helpers/decorators/index";
import { Exchange, Exchanges } from "../models/index";
import { ExchangesView, MessageView } from "../views/index";

export class ExchangeController {

    @DomInject('#date')
    private _inputDate: JQuery;

    @DomInject('#quant')
    private _inputQuant: JQuery;

    @DomInject('#value')
    private _inputValue: JQuery;

    private _exchanges = new Exchanges();
    private _exchangesView = new ExchangesView('#exchangesView');
    private _menssageView = new MessageView('#messageView');

    constructor() {
        /**
         * Now it is no longer necessary to use these variables here, let's do a lazy loading of the DOM. Using Lazy Load.
         * Lazy Load, makes the data not load in the constructor. They will only be loaded when we interact with them.
         */
        // this._inputDate = $('#date'); 
        // this._inputQuant = $('#quant');
        // this._inputValue = $('#value');

        // updates the view to display the model data, empty
        this._exchangesView.update(this._exchanges);
    }

    add(event: Event) {

        event.preventDefault();

        let date = new Date(this._inputDate.val().replace(/-/g, ','));
        if(this._isWorkDay(date)) {
            this._menssageView.update('Only work days negotiations, please!');
            return 
        }

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

    private _isWorkDay (date: Date) {
        return date.getDay() == 0 || date.getDay() == 6;
    }
}
