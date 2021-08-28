console.log(`Trabalhando com loops \n`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
)

listaDeDestinos.push(`Curitiba`)

const idadeComprador = 17
const estaAcompaanhada = false
let temPassagemComprada = false
const destino = "Salvador"

console.log("\nDestinos possíveis: ")
console.log(listaDeDestinos)
console.log(typeof (listaDeDestinos))

const podeComprar = idadeComprador >= 18 || estaAcompaanhada

let contador = 0
let destinoExiste = false

// while (contador < listaDeDestinos.length) {
   
//     if (listaDeDestinos[contador] == destino) {
//         //console.log("Destino existe.")
//         destinoExiste = true
//         break 
//     } 

//     contador += 1;
// }

for (let cont = 0; cont < listaDeDestinos.length ; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        //break
    }
}

console.log("Destino Existe:", destinoExiste)

if (podeComprar && destinoExiste) {
    console.log("Boa viagem") 
} else {
    console.log("Desculpe tivemos um erro!")
}