const eventBus = require('./event-bus')

class Inventory {
  products = new Map()

  constructor() {
    eventBus.on('payment successful', product => {
      this.removeProduct(product)
    })
  }

  addProduct(product) {
    if (!this.products.has(product)) {
      this.products.set(product, 0)
    }

    this.products.set(product, this.products.get(product) + 1)
  }

  removeProduct(product) {
    if (this.products.get(product) == 0) throw new Error('no stock')

    this.products.set(product, this.products.get(product) - 1)
  }
}

module.exports = new Inventory()
