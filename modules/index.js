//Modulos são conjuntos de código.
//3 tipos:
//->TODOS ARQUIVOS JAVASCRIPT SÃO MÓDULOS
//-> NATIVOS;
//-> npm (Node Package Manager)

const {printName, lastName} = require('./printName')
const os = require('os')

console.log(os.type())
console.log(`Olá ${printName("Matheus")} ${lastName}`)