import { IExchange } from "../interfaces/IExchange";
import { IResponseHandler } from "../interfaces/IResponseHandler";
import { Exchange } from "../models/Exchange";

export class ExchangeService {
    public async getData (handler: IResponseHandler): Promise<Exchange[]> {      
        return fetch('http://localhost:4041/api')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dataList: IExchange[]) => 
                dataList.map(data => new Exchange(new Date(), data.volume, data.quantities))
            )
            .catch((err) => { 
                console.log(err.message) 
                throw new Error("Couldn't import data. Service temporarily down.")
            });
    }
}