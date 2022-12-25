function filterReadingsOutsideRange(stationData, temperatureRange) {
  const { readings } = stationData;
  const { temperatureFloor, temperatureCeiling } = temperatureRange;

  return readings.filter((r) => r.temp < temperatureFloor || r.temp > temperatureCeiling);
}

const stationData = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
const temperatureRange = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

const alerts = filterReadingsOutsideRange(stationData, temperatureRange);

console.log(alerts);