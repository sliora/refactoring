function localShippingRules(country) {
  const data = country;
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calculateShippingCosts() {
  //관련 없는 코드
  const shippingRules = localShippingRules();
  //더 관련 없는 코드
}

class OrderProcessingError extends Error {
  #code
  constructor(errorCode) {
    super(`주문 처리 오류: ${errorCode}`);
    this.#code = errorCode;
  }

  get code() {
    return this.#code;
  }
  get name() {
    return "OrderProcessingError";
  }
}


try {
  calculateShippingCosts();
} catch (e) {
  if(e instanceof OrderProcessingError) {
    console.log({errorCode: e.code})
  }
  else{
    throw e;
  }
}