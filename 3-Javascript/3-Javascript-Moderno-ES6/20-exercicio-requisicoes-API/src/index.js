import "core-js"
import "regenerator-runtime/runtime"


// Aqui importamos a classe Neo exportada de outro arquivo
import SentryObject from "./sentry_object"

// Aqui importamos a função que fez a requisição da API
import { getSentryObjects } from "./sentry_service"


// Criamos uma async function para carregar os dados
// Criamos um array vazio para armazenar os itens
// Armazenamos a chamada da async function getSentryObjects() com o await na variável sentryObjectsJSON
// e percorremos o array com o forEach realizando uma ação para cada elemento,
// Também instanciamos a classe Neo com os dados vindos da API e adicionamos no array neos.
async function loadSentryObjects() {
    let sentryObjects = []
    let sentryObjectsJSON = await getSentryObjects()
    sentryObjectsJSON.forEach(sentry => {
        const newSentry = new SentryObject(sentry["sentryId"], sentry["fullname"], sentry["year_range_min"], sentry["year_range_max"])
        console.log(newSentry)
        sentryObjects.push(newSentry)
    })
    // Aqui chamamos a função abaixo que exibe os itens na página que recebe o array como parâmetro
    renderSentryObjects(sentryObjects)
}

//  Criamos uma função para exibir os objetos na página HTML
//  Selecionamos o elemento ol pelo id no HTML
//   percorremos o array sentryObjects que contém os itens vindos da API utilizando o forEach e para cada elemento criamos um li, 
//  criamos uma mensagem com os dados de cada elemento e adicionamos no li 
//  e também adicionamos o li no  ul como seu filho com o appendChild().
function renderSentryObjects(sentryObjects){
    const olElement = document.getElementById("sentry-objects")
    sentryObjects.forEach(sentry => {
        const liElement = document.createElement("li")
        const text = `(${sentry.id}) ${sentry.name}: risco de colisão entre ${sentry.yearMin} e ${sentry.yearMax}`
        liElement.innerText = text
        olElement.appendChild(liElement)
    })
}

// e aqui chamamos a função que exibe os itens
loadSentryObjects()