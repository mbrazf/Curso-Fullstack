// Aqui pegamos a distância em anos-luz
let yearLight = prompt("Informe a distância em anos luz : ");

// Aqui exibimos o menu para escolher a conversão
let chosenOption = prompt(
  "Escolha a conversão: \n\n1- Parsec(pc)\n2- Unidade Astronônimica(AU)\n3- Quilômetros(km)\n\n (Digite o número da opção desejada)"
);
// Aqui declaramos 2 variáveis vazias para serem utilizadas abaxio
let chosenUnity;
let convertedDistance;
// Aqui realizamos a verificação da opção escolhida e realizamos o cálculo baseado na conversão escolhida
switch (chosenOption) {
  // aqui a conversão de ano-luz para parsec
  case "1":
    chosenUnity = "Parsec (pc)";
    convertedDistance = yearLight * 0.306601;
    break;
  // aqui a conversão de ano-luz para unidade astronômica
  case "2":
    chosenUnity = "Unidade Astronômica (UA)";
    convertedDistance = yearLight * 63141.1;
    break;
  // aqui a conversão de ano-luz para quilômetros, utilizamos o método Math.pow para potenciação
  case "3":
    chosenUnity = "Quilômetros (km)";
    convertedDistance = yearLight * 9.5 * Math.pow(10, 12);
    break;
  // e aqui caso a opção escolhida seja inválida
  default:
    chosenUnity = "Unidade não identificada\n";
    convertedDistance = "Conversão fora do escopo";
}
// Aqui exibimos um alert com o resultado da conversão
alert(
  "Distância em Anos-Luz: " +
    yearLight +
    "\nConversão desejada: " +
    chosenUnity +
    " " +
    convertedDistance
);
