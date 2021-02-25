class ExchangeController {

    private _inputDate: HTMLInputElement;
    private _inputQuant: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _exchanges = new Exchanges();
    private _exchangesView = new ExchangesView('#exchangesView');

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#date');
        this._inputQuant = <HTMLInputElement>document.querySelector('#quant');
        this._inputValue = <HTMLInputElement>document.querySelector('#value');

       // atualiza a view para exibir os dados do modelo, vazio
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

        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._exchangesView.update(this._exchanges);
    }
}