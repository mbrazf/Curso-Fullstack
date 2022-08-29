// Exemplo Síncrono - executa passo a passo
// - Primeiro executa o passo 01 depois chama a função do passo 02  e depois executa o passo 03.
function step02(){
    console.log("Passo 02")
}

console.log("Passo 01")

step02()
console.log("Passo 03")



// Exemplo Assíncrono - passa para a execução seguinte sem aguardar a conclusão da outra.
// - Aqui executamos o passo 04 e passamos para o setTimeout(Assincrono) mas como ele só será executado depois de 1 segundo, durante este intervalo de tempo a execução pula para o passo 06 e depois executa o setTimeOut com o passo 05.
console.log("Passo 04")

setTimeout(() => {
    console.log("Passo 05")
}, 1000);

console.log("Passo 06")