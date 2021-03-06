export class User {
  _id: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  accountType: string = '';
  email: string = '';
  registrationType: string = '';
  registrationTime: Date = new Date();
  image: string = '';

  constructor({
    id = '',
    password = '',
    firstName = '',
    lastName = '',
    accountType = 'default',
    email = '',
    registrationType = '',
    registrationTime = new Date(),
    image = '',
  } = {}) {
    this._id = id;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountType = accountType;
    this.email = email;
    this.registrationType = registrationType;
    this.registrationTime = registrationTime;
    this.image = image;
  }
}
