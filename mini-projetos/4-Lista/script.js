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

let user = document.querySelector('#list__users')
listUsers.forEach(user => {
    user.innerHTML = `
        <img src="${users.image}" alt="user list" class="list__img">
        <div class="user-data">
            <h2 class="list__name">${users.nome}</h2>
            <p class="list__address">${users.endereco}</p>
        </div>
        <hr>
    `
})  
    
