let listUsers = [
    {
        nome: 'Piotr Bürkle',
        endereco: 'Oraniembaum - Wörlitz, Germany',
        image: 'https://picsum.photos/80'
    },
    {
        nome: 'Amber Fowler',
        endereco: 'Wagga, Australia',
        image: 'https://picsum.photos/80'
    },
    {
        nome: 'Lidia Pastor',
        endereco: 'Oraniembaum - Wörlitz, Germany',
        image: 'https://picsum.photos/80'
    },
    {
        nome: 'Barry Black',
        endereco: 'El Monte, United States',
        image: 'https://picsum.photos/80'
    }
]

let user = document.querySelector('.list__users')
let allUsers = ''
listUsers.forEach(user => {
    allUsers += `
        <img src="${users.image}" alt="user list" class="list__img">
        <div class="list__text">
            <h2 class="list__name">${users.nome}</h2>
            <p class="list__address">${users.endereco}</p>
        </div>
        <hr>
    `
})  
user.innerHTML = allUsers
    
