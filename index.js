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


let arr = [1,2,4,5,2,4,7,9]
let sum = 0
let count = 0
for(let i = 0; i < arr.length; i++){
  sum += arr[i]
  count++
}
console.log(sum);
console.log(count);