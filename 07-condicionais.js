console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
)

listaDeDestinos.push(`Curitiba`)

const idadeComprador = 18
const estaAcompaanhada = false
const temPassagemComprada = true

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)
console.log(typeof (listaDeDestinos))

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1) // removendo item
// } else if (estaAcompaanhada) { // a pessoa é menor de idade 
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1)
// } else {
//     console.log("Não é maior de idade e não posso vender")
// }

if (idadeComprador >= 18 || estaAcompaanhada) {
    console.log("Boa viagem")
    listaDeDestinos.splice(1, 1) // removendo item
} else {
    console.log("Não é maior de idade e não posso vender")
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem")
} else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos)

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)





