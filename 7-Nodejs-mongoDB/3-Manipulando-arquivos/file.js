
// Aqui importamos um pacote do próprio node para manipular arquivos
const fs = require('fs')

// aqui utilizamos o pacote fs com o método writeFile() utilizado para criar um arquivo, recebe 3 parâmetros o primeiro é o título do arquivo o segundo o conteúdo e o terceiro uma função para o erro

/*
fs.writeFile('text.txt', 'Olá NodeJs', err =>{
    console.log(err)
})
*/

// ai basta executar no terminal 'node file.js' que o arquivo será criado


// e também temos o método appendFile recebe os mesmo 3 parãmetros do writeFile porém ele adiciona conteúdos adicionais no arquivo
/*
fs.appendFile('text.txt', 'Olá NodeJs\n', err => {
    console.log(err)
})
*/

// e temos o método rename utilizado para renomear algum arquivo, recebe 3 parâmetros o primeiro é o arquivo que será alterado, o segundo o novo nome e o terceiro uma função caso haja erro
//fs.rename('text.txt', 'teste2.txt', err => console.log(err))


// temos o unlink, ele é utilizado para remover um arquivo, passamos 2 parâmetro o primeiro é o arquivo que será removido e o segundo uma função para o erro
//fs.unlink('teste2.txt', err => console.log(err))


// e o node possui uma variável de ambiente __dirname que retorna o caminho para o diretório/pasta atual
console.log(__dirname)