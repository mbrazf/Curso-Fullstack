// Aqui criamos e exportamos uma async function que realiza a requisição da API
// Utilizamos o fetch() com a URL da API
// Armazenamos em uma variável e convertemos para objeto javascript
// e retornamos os dados
export async function getSentryObjects(){
    let response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=50&api_key=DEMO_KEY")
    let result = await response.json()
    return result["sentry_objects"]
}