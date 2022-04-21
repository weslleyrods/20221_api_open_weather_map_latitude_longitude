/* 
2. Refaça o exercício 1 usando arrow functions.
*/

const sum = (n1, n2) => n1 + n2;

const sub = (n1, n2) => n1 - n2;

const mult = (n1, n2) => n1 * n2;

const div = (n1, n2) => (n2 > 0 ? n1 / n2 : "divisão por zero");

console.log(`
    Resultado da soma: ${sum(10, 10)}
    Resultado da subtração: ${sub(50, 2)}
    Resultado da multiplicação: ${mult(10, 10)}
    Resultado da divisão: ${div(10, 10)}
`);
