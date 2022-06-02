require("./payment-processor");
require("./invoice-manager");
require("./order-manager");

const User = require("./user");
const Product = require("./product");

const inventory = require("./inventory");
const logisticsManager = require("./logistics-manager");
const analyticsManager = require("./analytics-manager");

const eventBus = require("./event-bus");

eventBus.on("delivery created", (delivery) => {
  logisticsManager.deliver(delivery);
});

const camera = new Product("Video camera", 999.99);
const armagan = new User();

inventory.addProduct(camera);
inventory.addProduct(camera);
inventory.addProduct(camera);

armagan.addBalance(2000);

armagan.buy(camera);
armagan.buy(camera);
armagan.buy(camera);

analyticsManager.printActions();

console.log(armagan);
