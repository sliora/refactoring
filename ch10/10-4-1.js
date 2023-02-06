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

export function plumage(bird) {

  switch (bird.type) {
    case 'EuropeanSwallow':
      return 'average';
    case 'AfricanSwallow':
      return bird.numberOfCoconuts > 2 ? 'tired' : 'average';
    case 'NorwegianBlueParrot':
      return bird.voltage > 100 ? 'scorched' : 'beautiful';
    default:
      return 'unknown';
  }
}
export function airSpeedVelocity(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 35;
    case 'AfricanSwallow':
      return 40 - 2 * bird.numberOfCoconuts;
    case 'NorwegianBlueParrot':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}
