const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.taxableCharge;