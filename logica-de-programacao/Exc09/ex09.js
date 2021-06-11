const search = str => str.indexOf('dota')

let txt = 'ashuasdotakkdsrt'

if (search(txt) != -1) {
    console.log("Parametro 'dota' encontrado!")
} else {
    console.log("Parametro 'dota' NÃO encontrado!")
}