// Aqui criamos dois arrays com as defesas da nave
const laserDefenses = ["Escudos Defletores", "Arma anti-laser"]
const steelDefenses = ["Escudos de Aço"]

// E aqui exportamos os recursos desejados utilizando o export nomeado, dessa forma podemos exportar mais de um item
// Podemos também renomear a exportação, para renomear temos que utilizar a exportação dessa forma
export { laserDefenses as laserDef, steelDefenses } 



// Aqui uma forma de exportar os itens diretamente na sua criação
//export const laserDefenses = ["Escudos Defletores", "Arma anti-laser"]
//export const steelDefenses = ["Escudos de Aço"]



// Aqui exportamos utilizando o export default, só podemos ter um export default por arquivo, e só podemos exportar 1 item
export default ["Escudo Repulsor"]