export function print(...exchanges: any[]) {
    exchanges.forEach(exchange => exchange.getText());
}