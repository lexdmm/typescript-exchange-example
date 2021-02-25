const controller = new ExchangeController();
document
    .querySelector('.form')
    .addEventListener('submit',controller.add.bind(controller)); // This bind is for this. the ExchangeController instance will not be lost when fetching the "add" data.


