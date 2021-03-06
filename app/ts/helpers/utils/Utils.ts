export function printText(...exchanges: any[]) {
    exchanges.forEach(exchange => exchange.getText());
}