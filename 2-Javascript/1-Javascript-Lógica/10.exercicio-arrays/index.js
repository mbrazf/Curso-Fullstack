const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

// primeiro utilizamos o filter para filtrar as naves em que a tripulação é maior que 9,
// depois utilizamos o map para retornar o nome das naves que tem a tripulação maior que 9.
let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
  return spaceship[1] > 9
}).map(spaceship => {
  return spaceship[0]       
})

// aqui utilizamos o findIndex para retornar qual nave, com o índice 2 igual a false
let ongoingHitchedSpaceships = hitchedSpaceships.findIndex(spaceship => {
  return spaceship[2] == false
})


// aqui utilizamos o map para deixar todos os elementos com letra maiúscula
let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
  return spaceship[0].toUpperCase()
})

// aqui criamosa mensagem que será exibida
let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ") 
message += "\nPlataforma com processo de engate: " + (ongoingHitchedSpaceships + 1) 
message += "\nEspaçonaves destacadas: " + highlightedSpaceships
// e aqui exibimos um alert com a mensagem criada acima
alert(message)

