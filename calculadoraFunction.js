/*
    1. Escreva funções que implementem as quatro operações aritméticas.
    Todas elas devem receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva operação.
    Faça a implementação usando a palavra function para todas elas.
*/

function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function mult(n1, n2) {
  return n1 * n2;
}

function div(n1, n2) {
  return n2 > 0 ? n1 / n2 : "divisão por zero";
}

console.log(sum(10, 10));
console.log(sub(10, 5));
console.log(mult(10, 5));
console.log(div(10, 5));
