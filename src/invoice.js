module.exports = class Invoice {
  constructor(product, payment, address) {
    this.payment = payment
    this.address = address
    this.product = product
  }
}
