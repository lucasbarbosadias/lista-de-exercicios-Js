let btn = document.querySelector('button')
let user = document.querySelector('#user')
let senha = document.querySelector('#senha')

btn.addEventListener('click', () => {
    alert(`Seu login é: ${user.value} \nSua senha é: ${senha.value}`)
})

user.addEventListener('input', () => {
    senha.addEventListener('input', () => {
        if (user.value.length == 0 && senha.value.length == 0) btn.disabled = true
        else btn.disabled = false
    })
    
})