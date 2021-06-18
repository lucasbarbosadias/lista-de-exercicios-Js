const factorySug = (array) => {    
    const sugElements = []
    for (let i = 0; i < array.length; i++) {
        sugElements.push(`
        <div class="sug__element">
            <div class="sug__votes">
                <button class="sug__btn"><i class="fas fa-chevron-circle-up"></i></button>
                <p><span class="sug__num">0</span><br>votes.</p>
            </div>
            <div class="sug__desc">
                <p>${array[i]}</p>
            </div>
        </div>
        `)
    }
    elementSug.innerHTML = sugElements
    addVotes(array)
}

const addVotes = (array) => {
    let voteBtn = document.querySelectorAll('.sug__btn')
    let votes = document.querySelectorAll('.sug__num')
    let vt = 0

    for (let c = 0; c < array.length; c++) {
        votes[c].innerText = vt 
        voteBtn[c].addEventListener('click', () => {
            vt == 0 ? vt = 1 : vt = 0
            votes[c].innerText = vt
        })
    }
}

const SUG = ['Create a ReactJS Voting App','CSS Loading Animations']

let sug__qtd = document.querySelector('.sug__qtd')
sug__qtd.innerText = SUG.length

let textarea = document.querySelector('#text')

textarea.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        elementSug.innerHTML = ''
        SUG.push(textarea.value)
        textarea.value = ''
        sug__qtd.innerText = SUG.length
        init()
    } 
})

let elementSug = document.querySelector('.sug__list')

const init = () => {
    factorySug(SUG)
}

init()