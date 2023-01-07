//공식적인 반복분 쪼개기 리팩터링
export function reportYoungestAgeAndTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }

  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

//더 가다듬기, 각 반복문을 함수로 추출, 반복문을 파이프라인으로 변경 및 알고리즘 교체하기 적용
export function reportYoungestAgeAndTotalSalary(people) {

  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngestAge() {
    return Math.min(...people.map(p => p.age));
  }
}