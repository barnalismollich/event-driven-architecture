const eventBus = require('./event-bus')

class PaymentProcessor {
  constructor() {
    eventBus.on('pay', (balance, product, address) => {
      this.pay(balance, product, address)
    })
  }

  pay(balance, product, address) {
    if (balance < product.price) {
      return eventBus.emit('insufficient funds')
    }

    eventBus.emit('payment successful', product, product.price, address)
  }
}

module.exports = new PaymentProcessor()
