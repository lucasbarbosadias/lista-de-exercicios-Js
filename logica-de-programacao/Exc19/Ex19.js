const timeFilter = timeSeconds => {
    let hours = 0
    let minutes = 0
    let seconds = 0

    while(timeSeconds > 0) {
        if (timeSeconds >= 3600) {
            timeSeconds -= 3600
            hours++            
        } else if (timeSeconds >= 60) {
            timeSeconds -= 60
            minutes++
        } else {
            timeSeconds -= 1
            seconds++
        }
    }
    return `O tempo de duração é ${hours} horas, ${minutes} minutos e ${seconds} segundos.`
}

console.log(timeFilter(50000))