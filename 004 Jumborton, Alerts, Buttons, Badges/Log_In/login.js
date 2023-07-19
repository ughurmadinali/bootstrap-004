const user = [
    {
        name: 'Roman Reigns',
        password: 's1t2r3o4n5g6'
    }
]

if(!localStorage.getItem(user)){
    localStorage.setItem('user',JSON.stringify(user))
}

const loginBtn = document.querySelector('#login')
const allInput = document.querySelectorAll('input')
const alertDiv = document.querySelector('.alert')

loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users'))

    let userAvaible = users.some(() => user.name === allInput[0].value && user.password === allInput[1].value)

    if(userAvaible){
        location.href = 'https://puhutv.com/icerde-detay'
    }else{
        alertDiv.style.display = 'block'
        setTimeout(() => {
            alertDiv.style.display = 'none'
        }, 3000);
    }
})