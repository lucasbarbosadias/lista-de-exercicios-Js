const juncao = (a, b, c) => {
    const d = a.concat(b, c)
    d.sort((b,a) => {
        if(a > b) return 1;

        if(a < b) return -1

        return 0
    })
    return d
}

let a = [0, 3, 99, 44, -1] 
let b = [4, 6, 9, 10, -349] 
let c = [1, 1, 1, 99, 37] 

console.log(juncao(a, b, c))
