const soma = arr => {
    let total = 0
    for (i in arr) {
        total += arr[i]
    }
    return total
}

let numeros = []

for (let i = 0; i < 10000; i++){
    numeros.push(Math.floor(Math.random() * 10))
}

console.log(soma(numeros))