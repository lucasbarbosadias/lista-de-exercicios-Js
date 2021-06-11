const maiorNum = vet => {
    let maior = vet[0]

    for (pos in vet){
        if (vet[pos] > maior) {
            maior = vet[pos]
        }
    }
    return(`O maior número é o ${maior}.`)
}

let numeros = [1,11,3,29,44,66,7,21,20,30]

console.log(maiorNum(numeros))