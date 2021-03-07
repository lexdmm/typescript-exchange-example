import { IObjectIsEqual } from "./IObjectIsEqual";
import { IPrintable } from "./IPrintable";

export interface IExchangeObject<T> extends IObjectIsEqual<T>, IPrintable {}
