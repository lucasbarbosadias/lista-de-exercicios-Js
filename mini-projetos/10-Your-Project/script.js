const disableCheck = (el) => el.checked = false

const click = (check) => {
    if(check1.checked == true && check2.checked == true && check3.checked == true){   
        disableCheck(order[0])
        order.shift()
    }
}

let check1 = document.querySelector('#good')
let check2 = document.querySelector('#cheap')
let check3 = document.querySelector('#fast')
let all    = document.querySelectorAll('input')
let order = []

for (let i = 0; i < all.length; i++)
all[i].addEventListener('click', () => {
    if(all[i].checked == true) {
        order.push(all[i])
        click(all[i])
    }
})
