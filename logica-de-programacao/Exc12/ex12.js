const pesoIdeal = (sexo, altura) => {
    let peso = 0

    sexo == 'M' ? peso = (72.7 * altura) - 58 : peso = (62.1 * altura) - 44.7

    return peso
}

console.log(pesoIdeal('M', 1.80).toFixed(2))