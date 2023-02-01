// 예제 1
const height = 10;
const width = 20;
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// 예제 2
export class Scenario {
  #primaryForce;
  #mass;
  #secondaryForce;
  #delay;
  constructor(primaryForce, mass, secondaryForce, delay) {
    this.#primaryForce = primaryForce;
    this.#mass = mass;
    this.#secondaryForce = secondaryForce
    this.#delay = delay;
  }

  get primaryForce() {
    return this.#primaryForce;
  }

  get mass() {
    return this.#mass;
  }

  get secondaryForce() {
    return this.#secondaryForce;
  }

  get delay() {
    return this.#delay;
  }
}

function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;
}

const scenario = new Scenario(1.0, 2.0, 1.3, 5);
console.log(distanceTravelled(scenario, 1));

// 예제 3
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result = inputValue - 2;
  if (quantity > 100) result = inputValue - 1;
  return result;
}

console.log(discount(10, 100))

