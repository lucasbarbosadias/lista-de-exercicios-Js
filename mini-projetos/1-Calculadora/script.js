let calc__visor = document.getElementById('calc__visor')

const insert = (num) => {
    let numero = calc__visor.innerHTML
    calc__visor.innerHTML = numero + num
}

const clean = () => { calc__visor.innerHTML = '' }

const back = () => {
    let resultado = calc__visor.innerHTML
    calc__visor.innerHTML = resultado.substring(0, resultado.length -1)
}

const calc = () => {
    let resultado = calc__visor.innerHTML
    if (resultado) {
        calc__visor.innerHTML = eval(resultado)
    } else {
        calc__visor.innerHTML = 'ERRO: calculo inválido!'
    }
}