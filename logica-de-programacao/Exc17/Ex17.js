const ageFilter = days => {
    let y = 0
    let m = 0
    let d = 0

    while(days > 0) {
        if (days >= 365){
            days -= 365
            y++
        } else if (days >= 30) {
            days -= 30
            m++
        } else {
            days -= 1
            d++
        }
    }
    return `Sua idade é de ${y} anos, ${m} meses e ${d} dias.`
}

console.log(ageFilter(7861))

