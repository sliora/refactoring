const values = [];
function getValueForPeriod(periodNumber) {
  return periodNumber >= values[periodNumber].length ? 0 : values[periodNumber];
}

try {
  getValueForPeriod(-10);
} catch (error) {
  console.log('에러 발생!');
}
