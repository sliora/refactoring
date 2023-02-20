class Employee {
  #name;
  #type;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return this.#type;
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  static createEmployee(type, name) {
    switch (type) {
      case "engineer": return new Engineer(name);
      case "manager": return new Manager(name);
      case "salesperson": return new Salesperson(name);
      default: throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }

}
class Manager extends Employee {
  get type() {
    return "manager";
  }
}

class Engineer extends Employee {


  get type() {
    return "engineer";
  }
}


const ellie = Employee.createEmployee('engineer', '엘리')
console.log(ellie.toString());

const bob = Employee.createEmployee('manager', '밥');
console.log(bob.toString());