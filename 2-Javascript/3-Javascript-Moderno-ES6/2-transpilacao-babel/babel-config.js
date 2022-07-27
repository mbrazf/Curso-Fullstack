//- npx babel [outputDiretório] --out-dir dist --presets=@babel/preset-env
  //- Transpila o diretório inteiro e faz o output da transpilação em outro diretório

//- Outra forma de fazer isso é criar o arquivo babel.config.js e configurar o preset e exportá-lo sem precisar utilizar a linha de comando do terminal
const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.3.2"
        }
    ]
]
module.exports = { presets }

// Ao executar o comando abaixo o arquivo será transpilado normalmente
//npx babel src --out-dir dist