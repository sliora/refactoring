export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {  //은행 이자 계산
    let result = 4.5;
    if (this._daysOverdrawn > 0)
      result += this.type.overdraftCharge(this.daysOverdrawn);
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this);
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }

  //초과 인출 이자 계산, 소스 컨텍스트에서 가져와야 할 데이터가 많다면 account 를 아니라면 daysOverdrawn 을 넘긴다.
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7)
        return baseCharge;
      else
        return baseCharge + (account.daysOverdrawn - 7) * 0.85;
    }
    else
      return account.daysOverdrawn * 1.75;
  }
}
