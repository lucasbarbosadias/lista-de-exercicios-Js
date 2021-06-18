let question = document.querySelectorAll('.question')
let question__btn = document.querySelectorAll('.question__btn')

const result = () => {
    question__btn.forEach((btn, index) => {
        btn.addEventListener('click', (event) => {
            question[index].classList.toggle('active')
        })
    })
}

result(question__btn)