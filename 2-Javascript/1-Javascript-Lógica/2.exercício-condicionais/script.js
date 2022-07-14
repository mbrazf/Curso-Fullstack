// Aqui pegamos o nome do piloto
let pilotName = prompt("Qual o seu nome piloto ?");

// Aqui definimos a velocidade em 0
let velocity = 0;

// Aqui pegamos a velocidade que o piloto deseja acelerar
let newVelocity = prompt("A qual velocidade você gostaria de acelerar ?");
// Aqui confirmamos a velocidade
let confirmVelocity = confirm("Estamos indo para " + newVelocity + " km/s.");

// Aqui verificamos se a velocidade foi confimada e se foi atribuimos o valor na variável velocity
if (confirmVelocity) {
  velocity = newVelocity;
}

// E aqui verificamos as velocidades e exibimos uma mensagem para cada velocidade
if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais");
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter");
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir.");
} else {
    alert("Velocidade perigosa. Controle automático forçado.");
}

// Aqui exibimos uma mensagem com os dados, nome do piloto e velocidade da nave
alert(
  "Nome do Piloto: " + pilotName + "\nVelocidade Atual: " + velocity + " km/s."
);
