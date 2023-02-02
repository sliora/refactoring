

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(customerId) {
  if (! _repositoryData.customers.has(customerId))
    _repositoryData.customers.set(customerId, new Customer(customerId));
  return findCustomer(customerId);
}

export function findCustomer(customerId) {
  return _repositoryData.customers.get(customerId);
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

initialize();
const order = new Order({number: 123, customerId: 456});
console.log(order.customer.id);