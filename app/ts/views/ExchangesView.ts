class ExchangesView {

    private _element: Element;

    constructor(seletor: string) {

        this._element = document.querySelector(seletor);
    }

    update(model: Exchanges) {

        this._element.innerHTML = this.template(model);
    }

    template(model: Exchanges): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITIES</th>
                    <th>VALUE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.getArray().map(exchange => 
                `
                    <tr>
                        <td>${exchange.date.getDate() }/${ exchange.date.getMonth()+1 }/${ exchange.date.getFullYear() }</td>
                        <td>${exchange.quant}</td>
                        <td>${exchange.value}</td>
                        <td>${exchange.volume}</td>
                    </tr>                        
                `).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }
}
