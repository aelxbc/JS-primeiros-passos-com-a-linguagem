console.log(`Trabalhando com listas`)

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`, 
  
    )

listaDeDestinos.push(`Curitiba`)
console.log("Destinos possíveis: ")
// console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos)
console.log(typeof(listaDeDestinos))

listaDeDestinos.splice(1, 1)
console.log(listaDeDestinos)

console.log(listaDeDestinos[0], listaDeDestinos[1])