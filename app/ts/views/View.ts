// Change to abstract class to block instance of the View class
abstract class View<T> {

    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }
    // type T is a genéric type
    update(model: T) {
        this._element.innerHTML = this.template(model);
    }

    abstract template(model: T): string
}
