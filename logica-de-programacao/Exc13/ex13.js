const notas = valor => {
    let n100 = 0
    let n50 = 0
    let n10 = 0
    let n5 = 0
    let n1 = 0
    let i = parseInt(valor)
    
    console.log(i)

    while(i > 0) {
        if(i >= 100) {
            i -= 100
            n100++
        } else if (i >= 50) {
            i -= 50
            n50++
        } else if (i >= 10) {
            i -= 10
            n10++
        } else if (i >= 5) {
            i -= 5
            n5++
        } else {
            i--
            n1++
        }
    }
    return `${n100} notas de R$100 \n${n50} notas de R$50 \n${n10} notas de R$10 \n${n5} notas de R$5 \n${n1} notas de R$1`
}

console.log(notas(199))