import { Printable } from "../../models/index";

export function printText(...objects: Printable[]) {
    objects.forEach(object => object.getText());
}
