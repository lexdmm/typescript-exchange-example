/**
 * @description Get Runtime execution.
 * @param timeUnit time unit can be milleseconds 'ms' or seconds 's'
 */
export function DomInject(selector: string) {
    return function (target: any, key: string) {

        let element: JQuery;
        const getter = () => {
            if(!element) {
                console.log(`find  ${selector} para injetar em ${key}`);
                element = $(selector);
            }

            return element;
        }

        Object.defineProperty(target, key, { get: getter });
    }
    
}
