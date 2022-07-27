// Aqui adicionamos as configurações do webpack



const path = require("path")

// Aqui o webpack irá ler o arquivo index.js e irá gerar outro arquivo index.js no diretório dist e irá sobrescrever o main.js
// Por padrão ele gera um arquivo main.js
// Adicionamos uma nova entrada com galaxy.js
module.exports = {
    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },

    // Aqui adicionamos uma nova chave output que irá utilizar o padrão do nome do arquivo, tudo que houver na chave entry irá conter o nome.bundle.js.
    // e irá adicionar esse arquivo dentro da pasta/diretório dist
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // Aqui adicionamos uma nova chave rules que é um array com as regras 
    //  Adionamos uma regra que irá pegar todos os arquivos que terminam com .js e irá executar o babel-loader neles
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    //Adicionamos outra configuração com a chave watch
    // Ele irá monitorar por qualquer alteração nos arquivos, e quando encontrar irá processar o webpack novamente.
    watch: true,

    // Aqui outra chave com as configuração desse servidor que foi instalado
    //  O servidor vai monitorar a pasta dist e se houver algum arquivo novo ele irá recarregar o navegador automaticamente
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },

        liveReload: true
    },

    mode: "development"

}
