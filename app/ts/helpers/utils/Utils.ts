import { IPrintable } from "../../interfaces/IPrintable";

export function printText(...objects: IPrintable[]) {
    objects.forEach(object => object.getText());
}
