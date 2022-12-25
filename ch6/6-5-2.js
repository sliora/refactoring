export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer) {
    this.#reservations.push(customer);
  }

  /**
   * 185p 이상태에서 기존 함수를 인라인하여 호출 코드들이 새 함수를 이용하도록 고침
   * 이해가 안가서 강의를 한번 봐야할듯..
   */
  zz_addReservation(customer,isPriority) {
    assert(isPriority == true || isPriority == false);
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
