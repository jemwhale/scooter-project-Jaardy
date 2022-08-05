class Scooter {
  static fleet = [];
  constructor() {
    this.currentUser = '';
    this.scooterId = Math.trunc(Math.random() * 10000000);
  }
  rent(userName, scooterId) {
    //assigns a user to a scooter
    this.currentUser = userName;
  }
  dock() {
    this.currentUser = '';
  }
}

module.exports = Scooter;
