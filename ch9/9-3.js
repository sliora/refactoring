// 예제 1
class Order {

  #discount;
  #total;

  #discountedTotal;

  constructor() {
    this.#discount = 0;
    this.#total = 0;
  }

  get total() {
    return this.#total;
  }

  set total(value) {
    this.#total = value;
    this.#discountedTotal = this.#total - this.#discount;
  }

  get discount() {
    return this.#discount;
  }

  set discount(value) {
    this.#discount = value;
    this.#discountedTotal = this.#total - this.#discount;
  }

  get discountedTotal() {
    return this.#discountedTotal;
  }
}

const order = new Order();

order.total = 100;
console.log(order.discountedTotal); // outputs: 100

order.discount = 20;
console.log(order.discountedTotal); // outputs: 80



// 예제 2
class ProductionPlan {
  constructor() {
    this._adjustments = [];
    this._production = 0;
  }

  get production() {
    return this._production;
  }

  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((acc, adjustment) => acc + adjustment.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}

const productionPlan = new ProductionPlan();

const adjustment1 = { amount: 10 };
const adjustment2 = { amount: 20 };

productionPlan.applyAdjustment(adjustment1);
console.log(productionPlan.production); // outputs: 10
console.log(productionPlan.calculatedProductionAccumulator); // outputs: 10

productionPlan.applyAdjustment(adjustment2);
console.log(productionPlan.production); // outputs: 30
console.log(productionPlan.calculatedProductionAccumulator); // outputs: 30

