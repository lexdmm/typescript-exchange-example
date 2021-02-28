/**
 * @description Get Runtime execution.
 * @param timeUnit time unit can be milleseconds 'ms' or seconds 's'
 */
export function RuntimeLog(timeUnit: string = 'ms') {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        /**
         * @description 
         * The three points mean that as we do not know how many parameters are passed, we define a parameter rash, so you can accept 1 or n parameters. 
         * Javascritpt treats them as an array.
         * @param args 
         */
        descriptor.value = (...args: any[]) =>{

            let divider = 1;
            let unit = 'milliseconds'
            if(timeUnit === 's') {
                divider = 1000;
                unit = 'seconds';
            }

            console.log('-----------------------');
            console.log(`Method parameters ${key}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            const ret = originalMethod.apply(this, args);            

            const t2 = performance.now();
            console.log(`${key} delayed ${(t2 - t1)/divider} ${unit}`);
            console.log('-----------------------');

            return ret;
        }

        return descriptor;
    }
    
}