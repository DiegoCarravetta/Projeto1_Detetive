/*
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime.
As perguntas são:
1. Telefonou para a vítima?
2. Esteve no local do crime?
3. Mora perto da vítima?
4. Devia para a vítima?
5. Já trabalhou com a vítima?

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como Suspeita, entre 3 e 4 como Cúmplice e 5 como Assassino;
Caso contrário, ele será classificado como Inocente.
*/

console.log ("A partir de agora, irei fazer 5 perguntas!");
console.log ("É importante que a resposta seja somente:");
console.log ("S para SIM e N para NÃO.");
console.log ("Vamos começar!");

let pergunta1 = prompt ("Telefounou para a vítima?");
while (pergunta1 != "S" && pergunta1 != "s" && pergunta1 != "N" && pergunta1 != "n") {
  pergunta1 = prompt ("Por favor, conforme combinado, responda com S ou N");
}

let pergunta2 = prompt ("Esteve no local do crime?");
while (pergunta2 != "S" && pergunta2 != "s" && pergunta2 != "N" && pergunta2 != "n") {
  pergunta2 = prompt ("Por favor, conforme combinado, responda com S ou N");
}

let pergunta3 = prompt ("Mora perto da vítima?");
while (pergunta3 != "S" && pergunta3 != "s" && pergunta3 != "N" && pergunta3 != "n") {
  pergunta3 = prompt ("Por favor, conforme combinado, responda com S ou N");
}

let pergunta4 = prompt ("Devia para a vítima?");
while (pergunta4 != "S" && pergunta4 != "s" && pergunta4 != "N" && pergunta4 != "n") {
  pergunta4 = prompt ("Por favor, conforme combinado, responda com S ou N");
}

let pergunta5 = prompt ("Já trabalhou com a vítima?");
while (pergunta5 != "S" && pergunta5 != "s" && pergunta5 != "N" && pergunta4 != "n") {
  pergunta5 = prompt ("Por favor, conforme combinado, responda com S ou N");
}

let soma = 0;

if (pergunta1 == "S" || pergunta1 == "s") {
  soma = soma + 1;
}

if (pergunta2 == "S" || pergunta2 == "s") {
  soma = soma + 1;
}

if (pergunta3 == "S" || pergunta3 == "s") {
  soma = soma + 1;
}

if (pergunta4 == "S" || pergunta4 == "s") {
  soma = soma + 1;
}

if (pergunta5 == "S" || pergunta5 == "s") {
  soma = soma + 1;
}

if (soma == 2) {
  console.log ("Você é uma pessoa SUSPEITA");
}

else if (soma >= 3 && soma <=4 ) {
  console.log ("Você é CÚMPLICE!");
}

else if (soma > 4) {
  console.log ("Você é CULPADO!");
}

else {
  console.log ("Que bom, você é INOCENTE");
}