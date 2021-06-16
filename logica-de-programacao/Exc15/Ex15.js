const notification = index => {
    let alert = ''
    if (index < 0.3) {
        alert = 'Todas indústrias podem funcionar normal'
    } else if (index < 0.4) {
        alert = 'As indústrias do 1° grupo devem suspender as atividades'
    } else if (index < 0.5) {
        alert = 'As indústrias do 1° e 2° grupo devem suspender as atividades'
    } else {
        alert = 'Todas indústrias (1°, 2° e 3° grupo) devem suspender as atividades'
    }
    return alert
}

console.log(notification(0.5))