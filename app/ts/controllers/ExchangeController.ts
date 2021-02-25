class ExchangeController {

    private _inputDate: HTMLInputElement;
    private _inputQuant: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _exchanges = new Exchanges();
    private _exchangesView = new ExchangesView('#exchangesView');
    private _menssageView = new MessageView('#messageView');

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#date');
        this._inputQuant = <HTMLInputElement>document.querySelector('#quant');
        this._inputValue = <HTMLInputElement>document.querySelector('#value');

       // updates the view to display the model data, empty
        this._exchangesView.update(this._exchanges);
    }

    add(event: Event) {

        event.preventDefault();

        const exchange = new Exchange(
            new Date(this._inputDate.value.replace(/-/g, ',')), 
            parseInt(this._inputQuant.value),
            parseFloat(this._inputValue.value)
        );

        this._exchanges.add(exchange);

        // since adding, updates a view again to reflect the data
        this._exchangesView.update(this._exchanges);
        this._menssageView.update('Added successfully!');
    }
}