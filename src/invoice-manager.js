const eventBus = require('./event-bus')
const Invoice = require('./invoice')

class InvoiceManager {
  constructor() {
    eventBus.on('payment successful', (product, payment, address) => {
      const invoice = this.issueInvoice(product, payment, address)

      eventBus.emit('invoice created', invoice)
    })
  }

  issueInvoice(product, payment, user) {
    return new Invoice(product, payment, user)
  }
}

module.exports = new InvoiceManager()
