let users = [
    {id: 1, name: 'Alice', email: 'alice@example.com'},
    {id: 2, name: 'Bob', email: 'bob@example.com'},
    {id: 3, name: 'Charlie', email: 'charlie@example.com'},
    {id: 4, name: 'David', email: 'david@example.com'},
    {id: 5, name: 'Eve', email: 'eve@example.com'},
    {id: 6, name: 'Frank', email: 'frank@example.com'},
    {id: 7, name: 'Grace', email: 'grace@example.com'},
    {id: 8, name: 'Hank', email: 'hank@example.com'},
    {id: 9, name: 'Ivy', email: 'ivy@example.com'},
    {id: 10, name: 'Jack', email: 'jack@example.com'},
    {id: 11, name: 'Karen', email: 'karen@example.com'},
    {id: 12, name: 'Leo', email: 'leo@example.com'},
    {id: 13, name: 'Mona', email: 'mona@example.com'},
    {id: 14, name: 'Nina', email: 'nina@example.com'},
    {id: 15, name: 'Oscar', email: 'oscar@example.com'}
];

generateUsersListHTML(users)

const searchInput = document.querySelector('.search-user')
searchInput.addEventListener('input', function (e){
    console.log(e)
    // x.name.indexOf(e.target.value)>=0
    let newUsers = users.filter(x=>x.name.indexOf(e.target.value)>=0)
    generateUsersListHTML(newUsers)

})

function deleteUserById(userId){
    const newUsers = users.filter(x=>x.id!==userId)
    users = newUsers
    generateUsersListHTML(newUsers)
}

function generateUsersListHTML(userListProp){
    let usersList = document.querySelector('.users-list')
    usersList.innerHTML = ''
    userListProp.forEach(item=>{
        let userBox = document.createElement('div')
        userBox.classList.add('user-box')
        userBox.innerHTML = `
<h3>${item.name}</h3> 
<p>${item.email}</p>
<button onclick="deleteUserById(${item.id})">Delete</button>
`
        usersList.append(userBox)
    })
}
const addUser = document.getElementsByClassName('add-user')[0]
const email = document.getElementsByClassName('email')[0]
const userName = document.getElementsByClassName('userName')[0]
let nameError = document.getElementsByClassName('name-error')[0]
let emailError = document.getElementsByClassName('email-error')[0]


addUser.addEventListener('click', function() {
    nameError.innerText = ''
    emailError.innerText = ''

    if (userName.value && email.value) {
        let newUser = {
            id: users.length + 1,
            name: userName.value.trim(),
            email: email.value.trim()
        };
        users.push(newUser);
        generateUsersListHTML(users);
        userName.value = ''
        email.value = ''
    } else {
        if (!userName.value) {
            nameError.innerText = 'Please add name';
        }
        if (!email.value) {
            emailError.innerText = 'Please add email';
        }
    }
});
