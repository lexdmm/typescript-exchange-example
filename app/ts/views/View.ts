// Change to abstract class to block instance of the View class
export abstract class View<T> {

    private _element: JQuery;
    private _scape: boolean;

    constructor(selector: string, scape: boolean) {
        this._element = $(selector);
        this._scape = scape
    }
    // type T is a genéric type
    update(model: T) {
        let template = this.template(model);
        if(this._scape) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        this._element.html(this.template(model));        
    }

    abstract template(model: T): string
}
