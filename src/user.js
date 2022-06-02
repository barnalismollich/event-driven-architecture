const eventBus = require('./event-bus')

class User {
  orders = []
  balance = 0
  address = 'Address'

  constructor() {
    eventBus.on('payment successful', (product, payment) => {
      this.balance -= payment
    })

    eventBus.on('order created', order => {
      this.orders.push(order)
    })
  }

  buy(product) {
    eventBus.emit('buying started')
    eventBus.emit('pay', this.balance, product, this.address)
    eventBus.emit('buying finished')
  }

  addBalance(amount) {
    this.balance += amount
  }
}

module.exports = User
