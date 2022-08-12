import "core-js"
import "regenerator-runtime/runtime"


// Aqui importamos a classe Neo exportada de outro arquivo
import Neo from "./neo"

// Aqui importamos a função que fez a requisição da API
import { getNeos } from "./neo_service"


// Criamos uma async function para carregar os dados
// Criamos um array vazio para armazenar os itens
// Armazenamos a chamada da async function getNeos com o await na variável neosJSON
// e percorremos o array com o forEach realizando uma ação para cada elemento, no exemplo armazenamos as medidas mínimas e máximas dos objetos da NASA, e calculamos a média.
// Também instanciamos a classe Neo com os dados vindos da API e adicionamos no array neos.
async function loadNeos(){
    let neos = []
    let neosJSON = await getNeos()
    neosJSON.forEach(neo => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        const averageDiameter = (minDiameter + maxDiameter) / 2
        const newNeo = new Neo(["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
        neos.push(newNeo)
    });

    // Aqui chamamos a função abaixo que exibe os itens na página que recebe o array como parâmetro
    renderNeos(neos)
}

//  Criamos uma função para exibir os objetos na página HTML
//  Selecionamos o elemento ul pelo id no HTML
//   percorremos o array neos que contém os itens vindos da API utilizando o forEach e para cada elemento criamos um li, 
//  verificamos se os itens tem perigo de colisão com um operador ternário, 
//  criamos uma mensagem com os dados de cada elemento e adicionamos no li 
//  e também adicionamos o li no  ul como seu filho com o appendChild().
function renderNeos(neos){
    const ulElement = document.getElementById("neos-list")
    neos.forEach(neo => {
        const liElement = document.createElement("li")
        const isSentry = neo.isSentry ? "Perigo de Colisão" : "Sem perigo de colisão"
        const text = `${neo.id} | ${neo.name} | ${neo.averageEstimatedDiameter} | ${isSentry}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}

// e aqui chamamos a funçãoa que exibe os itens
loadNeos()