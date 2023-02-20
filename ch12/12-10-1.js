class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  get hasTalkback() {
    return (this._premiumDelegate)
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get hasDinner() {
    return (this._premiumDelegate)
      ? this._premiumDelegate.hasDinner
      : undefined;
  }

  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }
    return (this._premiumDelegate)
      ? this._premiumDelegate.extendBasePrice(result)
      : result;

  }

  static createBooking(show, date) {
    return new Booking(show, date);
  }

  static createPremiumBooking(show, date, extras) {
    const result =  new Booking(show, date, extras);
    result._bePremium(extras);
    return result;
  }
}

class PremiumBookingDelegate {

  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }

  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback');
  }

  extendBasePrice(base) {
    return Math.round(base + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}
const show = {
  price: 100,
  talkback: true
};
const date = new Date();
const extras = {
  premiumFee: 50,
  dinner: true
};


//const booking = new Booking(show, date);
const booking = Booking.createBooking(show,date);
console.log(booking)
//const premiumBooking = new PremiumBooking(show, date, extras);
const premiumBooking = Booking.createPremiumBooking(show, date, extras);
console.log(premiumBooking)