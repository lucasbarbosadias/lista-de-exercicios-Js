const inversor = arr => {
    let inverso = []
    
    for (let i = arr.length - 1; i >= 0; i--) {
        inverso.push(arr[i])
    }
    return inverso
} 

let vet = [10, 20, 7, 12, 5, 9]

console.log(inversor(vet))