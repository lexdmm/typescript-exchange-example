import { Printable } from "../../models/Printable";

export function printText(...objects: Printable[]) {
    objects.forEach(object => object.getText());
}
