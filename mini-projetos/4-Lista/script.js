const LIST_USERS = [
    {
        name: 'Piotr Bürkle',
        address: 'Oraniembaum - Wörlitz, Germany',
        image: 'https://picsum.photos/80'
    },
    {
        name: 'Amber Fowler',
        address: 'Wagga, Australia',
        image: 'https://picsum.photos/80'
    },
    {
        name: 'Pedro Souza',
        address: 'São Paulo, Brasil',
        image: 'https://picsum.photos/80'
    },
    {
        name: 'Bryan James',
        address: 'New York, United States',
        image: 'https://picsum.photos/80'
    },
    {
        name: 'Lidia Pastor',
        address: 'Oraniembaum - Wörlitz, Germany',
        image: 'https://picsum.photos/80'
    },
    {
        name: 'Barry Black',
        address: 'El Monte, United States',
        image: 'https://picsum.photos/80'
    }
]

let elementUser = document.querySelector('.list__users')

const factoryUsers = (list) => {
  const userElements = list.map(user =>`
    <div class="list__junc">
      <img src="${user.image}" alt="user list" class="list__img">
      <div class="list__text">
          <h2 class="list__name">${user.name}</h2>
          <p class="list__address">${user.address}</p>
      </div>
    </div>
  `)  
  elementUser.innerHTML = userElements
}

const resetElementsUser = () => {
  elementUser.innerHTML = ''
}

const filter = (value) => {
  const newList = LIST_USERS.filter(user => user.name.includes(value))

  factoryUsers(newList)
}

const handleFilterUsers = ({ target }) => {
  const { value } = target
  resetElementsUser()
  filter(value)
}

document.querySelector('#filter').addEventListener('change', (event) => {
  handleFilterUsers(event)
})

const init = () => {
  factoryUsers(LIST_USERS)
}

init()




    
