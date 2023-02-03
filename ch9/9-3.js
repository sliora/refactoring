// 예제 1
class Order {

  #discount;
  #baseTotal;
  #discountedTotal;

  constructor() {
    this.#discount = 0;
    this.#baseTotal = 0;
  }

  set baseTotal(value) {
    this.#baseTotal = value;
  }

  set discount(value) {
    this.#discount = value;
  }

  get discountedTotal() {
    return this.#baseTotal- this.#discount;
  }
}

const order = new Order();

order.baseTotal = 100;
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

