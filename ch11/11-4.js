export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(numberRange) {
    return (
        numberRange.low >= this._temperatureRange.low &&
        numberRange.high <= this._temperatureRange.high);
  }
}
