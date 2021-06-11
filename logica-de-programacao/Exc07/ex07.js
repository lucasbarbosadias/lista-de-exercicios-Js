const maiorString = textos => {
    let maior = [0]
    for (let i = 0; i < textos.length; i++) {
        if (textos[i].length > maior.length) {
            maior = textos[i]
        }
    }
    return maior
}

let vet = ['menor', 'medio', 'maiorrrrrrr']

console.log(maiorString(vet))