console.log("Módulos Math e Date")

// Principais métodos Math

// O Math.pow realiza um cálculo de potência elevando 5 a 3
console.log(Math.pow(5, 3))
// resultado: 125

//  O Math.PI retorna uma fração do valor de PI
console.log(Math.PI)
// resultado: 3.141592653589793

// Math.sqrt retorna a raiz quadrada de um número
console.log(Math.sqrt(64))
// resultado: 8

// Math.cbrt retorna a raiz cúbica de um número
console.log(Math.cbrt(30))
// resultado: 3.1072325059538586

//  Math.ceil retorna o valor arredondado para cima
console.log(Math.ceil(5.2))
// resultado: 6

//  Math.floor retorna o valor arredondado para baixo
console.log(Math.floor(5.2))
// resultado: 5

//  Math.ceil retorna o valor arredondado para cima
console.log(Math.ceil(5.2))
// resultado: 6

//  Math.random retorna um valor aletório entre 0 e 1 
console.log(Math.random())

//  Math.round retorna o valor arredondado mais próximo
console.log(Math.round(5.2))
// resultado: 5

//  Math.trunc retorna o valor inteiro, removendo ponto ou vírgula
console.log(Math.trunc(7.2))
// resultado: 7



//  Principais métodos date
// Utilizados para manipular datas

// O new Date() é utilizado para criar uma instância de data, recebe vários tipos de parâmetros ano, mês, dia, hora, minuto, segundo.
//  Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC)
// No date os meses começam em 0 e vão até 11
let myBirthday = new Date(1998, 0, 16)
console.log(myBirthday)


// Retorna o valor em milisegundos passados desde a data base do Javascript 1 de Janeiro de 1970 00:00:00 UTC até o dia atual.
let today = Date.now()
console.log(today)
// resultado: 1658239145278 milisegundos
