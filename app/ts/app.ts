import { ExchangeController } from "./controllers/ExchangeController";

const controller = new ExchangeController();
$('.form').submit(controller.add.bind(controller)); // This bind is for this. the ExchangeController instance will not be lost when fetching the "add" data.


