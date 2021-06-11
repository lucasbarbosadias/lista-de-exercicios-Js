const parImpar = (n1, n2) => {
    if(n1%2==0 && n2%2==0)
        return 'Ambos números são pares!'
    else if (n1%2==0 && n2%2==!0)
        return `${n1} é par, e ${n2} é impar.`
    else if (n1%2==!0 && n2%2==0)
        return `${n1} é impar, e ${n2} é par.`
    else
        return 'Ambos números são impares!'
}

console.log(parImpar(3,10))