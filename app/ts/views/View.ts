// Change to abstract class to block instance of the View class
abstract class View<T> {

    private _element: JQuery;

    constructor(selector: string) {
        this._element = $(selector);
    }
    // type T is a genéric type
    update(model: T) {
        this._element.html(this.template(model));
    }

    abstract template(model: T): string
}
