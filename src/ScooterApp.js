const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  constructor() {
    this.registeredUsers = [];
  }
  registerUser(username, password) {
    //if user already exists in my registeredUsers array, return a message saying already registered
    for (let i = 0; i < this.registeredUsers.length; i++) {
      if (this.registeredUsers[i].username === username) {
        console.log('User already exists');
        return;
      }
    }

    let newUser = new User(username, password);
    this.registeredUsers.push(newUser);
  }
  login(username, password) {
    for (let i = 0; i < this.registeredUsers.length; i++) {
      if (this.registeredUsers[i].username === username && this.registeredUsers[i].password === password) {
        console.log('User successfully logged in');
        return;
      }
      console.log('Username or password is incorrect');
    }
    //log user in
  }
  addScooter() {
    //registers a new scooter for the fleet
    let newScooter = new Scooter();
    Scooter.fleet.push(newScooter);
    return newScooter;
  }
}

let myApp = new ScooterApp();

myApp.registerUser('jordan', 'password');
myApp.login('jordan', 'password');
let scooter1 = myApp.addScooter();
myApp.addScooter();
myApp.addScooter();
scooter1.rent('jordan');
console.log(Scooter);
scooter1.dock();
console.log(Scooter);

module.exports = ScooterApp;
