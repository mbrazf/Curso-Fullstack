// Aqui estamos consumindo a API NEO da NASA
// Criamos uma função async e exportamos ela
// Utilizamos o fetch() com o URL da API que retorna uma Promise e no resolve dela retorna os dados da API
// Utilizamos também o .json() que pega o retorno da API e transforma em um objeto Javascript
// e retornamos a lista dos objetos próximos da Terra
export async function getNeos(){
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    const result = await response.json()
    return result["near_earth_objects"]
}