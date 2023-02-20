class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get isMale() {
    return "M" === this.#genderCode;
  }

  static createPerson(record) {
    switch (record.gender) {
      case 'M': return new Person(record.name, "M");
      case 'F': return new Person(record.name, "F");
      default: return new Person(record.name, "X");
    }
  }
}


function loadFromInput(data) {
  return data.map(record => Person.createPerson(record));
}

const people = loadFromInput([
  { name: '엘리', gender: 'F' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = people.filter(p => p.isMale).length;
console.log(numberOfMales);
