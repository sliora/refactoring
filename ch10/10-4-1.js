export function plumages(birds) {
  return new Map(birds
      .map(b => createBird(b))
      .map(bird => [bird.name, bird.plumage]));
}

export function speeds(birds) {
  return new Map(birds
      .map((b) => createBird(b))
      .map(bird => [bird.name, bird.airSpeedVelocity]));
}

function createBird(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(bird);
    case 'AfricanSwallow':
      return new AfricanSwallow(bird);
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(bird)
    default:
      return new Bird(bird);
  }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return "Unknown"
  }

  get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallow extends Bird {

  get plumage() {
    return "알 수 없다";
  }
  
  get airSpeedVelocity() {
    return null;
  }
}

class AfricanSwallow extends Bird {

  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다"
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {

  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다"
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const birds = [
  { name: 'EuropeanSwallow', type: 'EuropeanSwallow'},
  { name: 'AfricanSwallow1', type: 'AfricanSwallow', numberOfCoconuts: 2},
  { name: 'AfricanSwallow2', type: 'AfricanSwallow', numberOfCoconuts: 3},
  { name: 'NorwegianBlueParrot1', type: 'NorwegianBlueParrot', voltage: 110, isNailed: true},
  { name: 'NorwegianBlueParrot2', type: 'NorwegianBlueParrot', voltage: 90, isNailed: false}
];

console.log('Plumages:', plumages(birds));
console.log('Speeds:', speeds(birds));