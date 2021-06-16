const totalItems = (list) => {
    let priceTotal = 0
    list.map (i => {
        let prc = i.price
        let qtd = i.quant
        priceTotal += prc * qtd
    })
    return priceTotal
}

const totalWithIpi = (total, ipi) => total * (ipi/100 +1)

const PRODUCTS = [
    {
        code: 1,
        price: 50,
        quant: 2
    },
    {
        code: 2,
        price: 30,
        quant: 4
    }
]

let valueIpi = 10
let total = 0
let totalIpi = 0

total = totalItems(PRODUCTS)
totalIpi = totalWithIpi(total, valueIpi)

console.log(totalIpi.toFixed(2))
