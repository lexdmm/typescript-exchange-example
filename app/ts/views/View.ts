class View<T> {

    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }
    // type T is a genéric type
    update(model: T) {
        this._element.innerHTML = this.template(model);
    }

    template(model: T): string {
        throw new Error('Você deve implementar o método template');
    }
}
