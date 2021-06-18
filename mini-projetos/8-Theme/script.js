let body = document.querySelector('#body')
let button = document.querySelector('.btn')

button.addEventListener('click', (event) => {
    button.classList.toggle('dark')
    body.classList.toggle('dark')
})