import { ExchangeController } from "./controllers/ExchangeController";

const controller = new ExchangeController();
$('#add-button').click(controller.add.bind(controller)); // This bind is for this. the ExchangeController instance will not be lost when fetching the "add" data.
$('#import-button').click(controller.importData.bind(controller));

