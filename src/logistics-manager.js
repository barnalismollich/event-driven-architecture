const eventBus = require('./event-bus')
const Delivery = require('./delivery')

class LogisticsManager {
  constructor() {
    eventBus.on('order created', (order, address) => {
      const delivery = new Delivery(order, address)

      eventBus.emit('delivery created', delivery)
    })
  }

  deliver(delivery) {
    console.log('delivering', delivery)
    eventBus.emit('delivery completed', delivery)
    return true
  }
}

module.exports = new LogisticsManager()
