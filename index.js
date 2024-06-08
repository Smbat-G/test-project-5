// let users = [
//     {id: 1, name: 'Alice', email: 'alice@example.com'},
//     {id: 2, name: 'Bob', email: 'bob@example.com'},
//     {id: 3, name: 'Charlie', email: 'charlie@example.com'},
//     {id: 4, name: 'David', email: 'david@example.com'},
//     {id: 5, name: 'Eve', email: 'eve@example.com'},
//     {id: 6, name: 'Frank', email: 'frank@example.com'},
//     {id: 7, name: 'Grace', email: 'grace@example.com'},
//     {id: 8, name: 'Hank', email: 'hank@example.com'},
//     {id: 9, name: 'Ivy', email: 'ivy@example.com'},
//     {id: 10, name: 'Jack', email: 'jack@example.com'},
//     {id: 11, name: 'Karen', email: 'karen@example.com'},
//     {id: 12, name: 'Leo', email: 'leo@example.com'},
//     {id: 13, name: 'Mona', email: 'mona@example.com'},
//     {id: 14, name: 'Nina', email: 'nina@example.com'},
//     {id: 15, name: 'Oscar', email: 'oscar@example.com'}
// ];

// generateUsersListHTML(users)

// const searchInput = document.querySelector('.search-user')
// searchInput.addEventListener('input', function (e){
//     console.log(e)
//     // x.name.indexOf(e.target.value)>=0
//     let newUsers = users.filter(x=>x.name.indexOf(e.target.value)>=0)
//     generateUsersListHTML(newUsers)

// })

// function deleteUserById(userId){
//     const newUsers = users.filter(x=>x.id!==userId)
//     users = newUsers
//     generateUsersListHTML(newUsers)
// }

// function editUserById(userId){
// let newUser = users.find(x => x.id === userId)
//    users = newUser

//     generateUsersListHTML(newUsers)
// }

// function generateUsersListHTML(userListProp){
//     let usersList = document.querySelector('.users-list')
//     usersList.innerHTML = ''
//     userListProp.forEach(item=>{
//         let userBox = document.createElement('div')
//         userBox.classList.add('user-box')
//         userBox.innerHTML = `
// <h3>${item.name}</h3>
// <p>${item.email}</p>
// <button onclick="deleteUserById(${item.id})">Delete</button>
// <button onclick="editUserById(${item.id})">Edit</button>
// `
//         usersList.append(userBox)
//     })
// }

// const addUser = document.getElementsByClassName('add-user')[0]
// const email = document.getElementsByClassName('email')[0]
// const userName = document.getElementsByClassName('userName')[0]
// let nameError = document.getElementsByClassName('name-error')[0]
// let emailError = document.getElementsByClassName('email-error')[0]

// addUser.addEventListener('click', function() {
//     nameError.innerText = ''
//     emailError.innerText = ''

//     if (userName.value && email.value) {
//         let newUser = {
//             id: users.length + 1,
//             name: userName.value.trim(),
//             email: email.value.trim()
//         };
//         users.push(newUser);
//         generateUsersListHTML(users);
//         userName.value = ''
//         email.value = ''
//     } else {
//         if (!userName.value) {
//             nameError.innerText = 'Please add name';
//         }
//         if (!email.value) {
//             emailError.innerText = 'Please add email';
//         }
//     }
// });

//==============================================================================================================
// home-work

// function Phone(model, year, country, count) {
//     this.model = model
//     this.year = year
//     this.country = country
//     this.count = count
// }
// function MyPhone() {

// }

// new Phone('iphone', 2024, 'USA', 100)

// MyPhone.prototype = Object.create(Phone.prototype)

// let testPhone = new MyPhone()

// testPhone.model = 'samsung'

// console.log(testPhone.model);

// class Phone {
//     constructor(model, year, country, count) {
//         this.mode = model;
//         this.year = year;
//         this.country = country;
//         this.count = count
// }
// }
// const myPhone = new Phone('iphone', 2024, 'USA', 100)

// class Samsung extends Phone {
//     constructor(model, year, country, count) {
//         super(model, year, country, count)
//     }
// }

// let galaxy = new Samsung('galaxy', 2024, 'USA', 100)
// console.log(galaxy);

/**
 * Unenq dproc class vor@ uni hetevyal parametrer@
 *
 *  anun, hasce,
 *
 * hetevyal funkcianer@
 *
 * 1. avelacnel dasatu
 * unenalov hetevyal karucvacq@
 * {name, position, price, id}
 *
 * 2. cuyc tal dasatuneri cucak@
 * 3. jnjel dasatuin
 *
 *
 *
 *
 * 4. avelacnel dasaran
 * unenalov hetevyal karucvacq@
 * {className, teacher, id}
 *
 * 5.avelacnel ashakert dasaranin
 *  {anun, azganun, hace, id, dasaranId}
 *
 *
 * **/

// class School {
//   teacherList = [];
//   class = [];
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }
//   addTeacher = (name, position, price, id) => {
//     this.teacherList.push({
//       name: name,
//       position: position,
//       price: price,
//       id: this.teacherList.length + 1,
//     });
//   };
//   showTeacher = () => {
//     console.log(this.teacherList);
//   };
//   removeTeacher = (id) => {
//     this.teacherList.splice(id, 1);
//   };
//   addClass = (className) => {
//     this.class.push({
//       name: className,
//       teacher: null,
//       student: [],
//       id: this.class.length + 1,
//     });
//   };
//   addStudent = (firstName, lastName, address, classId) => {
//     let result = this.class.find((x) => (x.name === classId));
//     result.student.push({
//       firstName: firstName,
//       lastName: lastName,
//       address: address,
//     });
//   };
//   getClass = () => {
//     console.log(this.class);
//   };
// }

// let cheghov = new School("Cheghov", "Yerevan");
// console.log(cheghov);

// cheghov.addTeacher("Khachik", "teacher", 1000);
// cheghov.addTeacher("Smbat", "teacher", 200);
// cheghov.addTeacher("Vardan", "teacher", 500);
// // cheghov.showTeacher()

// cheghov.addClass("class1");
// cheghov.addClass("class2");
// cheghov.addClass("class3");
// cheghov.getClass();
// cheghov.addStudent("Mirzoyan", "Vardan", "Yerevaan", "class2");

// cheghov.getClass();

/**
 * Unenq dproc class vor@ uni hetevyal parametrer@
 *
 *  anun, hasce,
 *
 * hetevyal funkcianer@
 *
 * 1. avelacnel dasatu
 * unenalov hetevyal karucvacq@
 * {name, position, price, id}
 *
 * 2. cuyc tal dasatuneri cucak@
 * 3. jnjel dasatuin
 *
 *
 *
 *
 * 4. avelacnel dasaran
 * unenalov hetevyal karucvacq@
 * {className, teacher, id}
 *
 * 5.avelacnel ashakert dasaranin
 *  {anun, azganun, hace, id, dasaranId}
 *
 *
 * **/

// class school {
//   teachers = [];
//   classList = [];
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }
//   addTeacher = (name, position, price, id) => {
//     this.teachers.push({
//       name: name,
//       position: position,
//       price: price,
//       id: this.teachers.length + 1,
//     });
//   };
//   showTeacher = ()=>{
//     console.log((this.teachers));
//   }
//   removeTeacher = (id)=>{
//     this.teachers.splice(id, 1)
//   }
//   addClass = (className)=>{
//     this.classList.push({
//         name: className,
//         teacher: null,
//         student: [],
//         id: this.classList.length + 1
//     })
//   }
//   addStudent = (firstName, lastName, address, classId)=>{
//     let result = this.classList.find((x)=>(x.name === classId))
//     result.student = {
//         firstName: firstName,
//         lastName: lastName,
//         address: address,
//     }
//   }
//   getClass = ()=>{
//     console.log(this.classList);
//   }
// }


// =========================================================================================================================================
 // task 1

//  class Animal {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }
  
//   getDetails() {
//       return `${this.name} is ${this.age} years old.;`
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, breed) {
//       super(name, age);
//       this.breed = breed;
//   }
  
//   getDetails() {
//       return `${this.name} is a ${this.breed} and is ${this.age} years old.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color) {
//       super(name, age);
//       this.color = color;
//   }
  
//   getDetails() {
//       return `${this.name} is a ${this.color} cat and is ${this.age} years old.`;
//   }
// }

// const animal = new Animal('Leo', 3);
// console.log(animal.getDetails()); // Leo is 3 years old.

// const dog = new Dog('Buddy', 4, 'Golden Retriever');
// console.log(dog.getDetails()); // Buddy is a Golden Retriever and is 4 years old.

// const cat = new Cat('Whiskers', 2, 'black');
// console.log(cat.getDetails()); // Whiskers is a black cat and is 2 years old.


//1

// class BankAccount{
//     constructor(accountNumber, holder, balance){
//         this.accountNumber = accountNumber
//         this.holder = holder
//         this.balance = balance
//     }
//      deposit(sum){
//         this.balance += sum
  
//     }
//     withdraw(sum2){
//         this.balance -= sum2
      
//    }
//    check(){
//        return this.balance 
//    }
// }

// let account = new BankAccount(123, 'Adam', 1000)
// console.log(account.check());



// 2

// class Foo{
// constructor(make, model, year){
// this.make = make
// this.model = model
// this.year = year
// }

// }


// class Car extends Foo{
//     constructor(make, model, year, doors){
//         super(make, model, year)
//         this.doors = doors
//     }
// }

// let car1 = new Car('BMW', 'x5', 2006, 5)
// console.log(car1);


//3

// class Shape{
//     constructor(a){
//         this.a = a
//     }
//     calculatedArea(){
//         return this.a * this.a
//     }
// }
// class Rectangle extends Shape{
//     constructor(a, b){
//         super(a)
//         this.b = b
//     }
//     calculatedArea(){
//         return this.a * this.b
//     }
// }

// class Circle extends Shape{
//     constructor(a, b, r){
//         super(a, b)
//         this.r = r
//     }
//     calculatedArea(){
//         return Math.PI * this.r
//     }
// }

// let x = new Rectangle(3, 4, 5, 6)
// console.log(x.calculatedArea());
// let y = new circle(3, 4, 5)
// console.log(y.calculatedArea());




// 4

// class Person{
//     constructor(name, age){
//         this.nam = name
//         this.age = age
//     }
//     introduce(){
//         console.log(`My name is ${this.name} and I am ${this.age}`);
//     }
// }

// class Student extends Person{
//     constructor(name, age, grade){
//         super(name, age)
//         this.grade = grade
//     }
//  introduce(){
//     console.log(`My name is ${this.name} and I am ${this.age} and I am in ${this.grade}`);
//  }
// }

// let x = new Student('Adam', 20, 3)
// x.introduce()



// 5

// class Employee{
// constructor(salary){
// this.salary = salary
// }
// calculateSalary(){
// return this.salary
// }
// }

// class Manager extends Employee{
//     constructor(salary, hours){
//         super(salary)
//         this.hours = hours
//     }
//     calculateSalary(){
//         return this.salary * this.hours
//     }
// }

// class Director extends Employee{
//     constructor(salary, hours){
//         super(salary)
//         this.hours = hours
//     }
//     calculateSalary(){
//         return this.salary * this.hours
//     }
// }

// let x = new Manager(1000, 4)
// console.log(x.calculateSalary());
// let y = new Director(2000, 8)
// console.log((y.calculateSalary()));



// 6 ????
// class User{
//     constructor(firstName, lastName){
//        this.firstName = firstName
//        this.lastName = lastName
//     }
//     #setPassword(userName, password){
//         this.userName = userName
//         this.password = password
//     }
//     setCredentials(userName, password){
//         this.#setPassword(userName, password)
//     }
//     validation(){
//         if(this.password > 8 && this.password < 16){
//             return correct
//         }
//         if(this.userName > 0 && this.userName < 10){
//             return correct
//         }
//         else{
//             return false
//         }
//     }
// }
// let x = new User('Adam', 'Smith')
// x.setCredentials('Adam', '123456789')
// console.log(x.validation());



// 7

// class Animal{
//     constructor(name){
// this.name = name
//     }
//     makeSound(){
//         return `the ${this.name} say hi`
// }
// }
// class Bird extends Animal{
//     constructor(name,age){
//         super(name)
//         this.age = age
//     }
//     fly(){
//         return `the ${this.name} fly ${this.age} years old`
//     }
// }

// class Parrot extends Bird{
//     constructor(name, age, color){
//         super(name, age)
//         this.color = color
//     }
//     makeSound(){
//         return `the ${this.name} ${this.age} and ${this.color} say hi`
//     }
// } 

// let x = new Animal('Bob')
// console.log(x.makeSound());
// let y = new Bird('Bobik', 3)
// console.log(y.fly())
// let z = new Parrot('tigre', 5, 'red')
// console.log(z.makeSound());



//  8 expain???

// class Product {
//     constructor(name, price) {
//         // this.name = name;
//         this._name = name
//         this.age = 0
//         this._price = price; // Use _price to store the actual value
//         this.#getMyName()
//     }

//     // Getter for price
//     get price() {
//         return this._price;
//     }

//     // Setter for price with validation
//     set price(value) {
//         if (value < 0) {
//             console.error('Price cannot be negative');
//         } else {
//             this._price = value;
//         }
//     }

//     // Getter for name
//     get name() {
//         return this._name;
//     }

//     #getMyName = ()=>{
//         console.log(this._name + ' '+ this.age);
//     }

//     // // Setter for name
//     // set name(value) {
//     //     this._name = value;
//     // }
// }

// // Example usage
// let product = new Product('Apple', 10);
// console.log(product.price); // Output: 10

// product.price = 20;
// console.log(product.price); // Output: 20

// product.price = -5; // Output: Price cannot be negative
// console.log(product.price); // Output: 20 (unchanged)

// product.name = 'Tandz'
// console.log(product);

// product.age = 345
// console.log(product.age);


// product.#getMyName()


//  public, private, protected, static


// 9

// class Device{
// constructor(name, price){
// this.name = name
// this.price = price
// }
// turnOn(){

// }
// }



// 10

// class Book {
//     constructor(autorName, bookName){
//         this.autorName = autorName
//         this.bookName = bookName
//     }
//     setBook(autorName, bookName){
//         this.autorName = this.autorName
//         this.bookName = this. bookName
// }
//     getBook(){
//         return `${this.bookName} by ${this.autorName}`
//     }
// }
// class eBook extends Book{
//     constructor(fileSize, autorName, bookName){
//         super(autorName, bookName)
//         this.fileSize = fileSize
// }
// setEbook(fileSize, autorName, bookName){
//     this.fileSize = fileSize
//     this.autorName = autorName
//     this.bookName = bookName
// }
//     getEbook(){
//         return `${this.bookName} by ${this.autorName} and ${this.fileSize}`
//     }
// }

// let x = new Book('Adam', 'Smith')
// console.log(x.getBook());
// let y = new eBook(10, 'Adam', 'Smith')
// console.log(y.getEbook());




// class work


// class Notification {
//     text = ''
//     setNotification(text) {
//         this.text = text
//     }

//     pushNotification() {
//         setTimeout(() => {
//            console.log(this.text);
//         }, 3000);
//     }
// }

// let x = new Notification();
// x.setNotification('Siraharvac es ?')
// x.pushNotification();



class Employee{
    employeeList = []
    setEmployee(data){
        this.employeeList.push(data)
    }
    getEmployee(){
        console.log(this.employeeList);
    }
}

class Developer extends Employee{
  
}

class Manager extends Employee{
   
}

let x = new Developer()
x.setEmployee('Adam Smith')
x.setEmployee('Adam Smith')
x.setEmployee('Adam Smith')
x.setEmployee('Adam Smith')
x.setEmployee('Adam Smith')
x.getEmployee()
let y = new Manager()
y.setEmployee('Tom Anderson')
y.setEmployee('Tom Anderson')
y.setEmployee('Tom Anderson')
y.getEmployee()