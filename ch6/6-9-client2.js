const newReading = acquireReading();
const aReading = new aReading(rawReading);
const taxableCharge = Math.max(
    0,
    aReading.baseCharge - taxThreshold(aReading.year),
);