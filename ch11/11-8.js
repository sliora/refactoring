export class Employee {
  // constructor(name, typeCode) {
  //   this._name = name;
  //   this._typeCode = typeCode;
  // }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }
  static createEngineer(name) {
    return new Employee(name);
  }

  static createEngineer(name, typeCode) {
    return new Employee(name, typeCode);
  }
}


const leadEngineer = Employee.createEngineer(document.leadEngineer);
const leadEngineer = Employee.createEngineer(document.leadEngineer, document.typeCode);
