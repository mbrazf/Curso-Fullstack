function testingES8(text1, text2){
    alert(`${text1}\n${text2}`)
}


let promise = Promise.resolve() 

/*
- npx babel [outputDiretório] --out-dir dist --presets=@babel/preset-env
  - Transpila o diretório inteiro e faz o output da transpilação em outro diretório

- Outra forma de fazer isso é criar o arquivo babel.config.js e configurar o preset e exportá-lo sem ter que ficar utilizando a linha de comando do terminal

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

- npm install core-js@3
  - Pacote que importa recursos que o ES5 não possui nativamente

- Ai basta usar o seguinte comando  npx babel [outputDiretório] --out-dir dist. 
- Que ai o arquivo irá fazer a importação dos pacotes do corejs necessários para transpilar para versão ES5.
*/