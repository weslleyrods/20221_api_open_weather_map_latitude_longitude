// 3. Crie um objeto JSON que abriga todas as operações do exercício 2.

let calc = {
  sum: (n1, n2) => n1 + n2,
  sub: (n1, n2) => n1 - n2,
  mult: (n1, n2) => n1 * n2,
  div: (n1, n2) => (n2 > 0 ? n1 / n2 : "divisão por zero"),
};

console.log(`
    Resultado da soma: ${calc.sum(10, 10)}
    Resultado da subtração: ${calc.sub(50, 2)}
    Resultado da multiplicação: ${calc.mult(10, 10)}
    Resultado da divisão: ${calc.div(10, 10)}
`);
