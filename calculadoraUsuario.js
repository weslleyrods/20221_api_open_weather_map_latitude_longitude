/* 
4. Escreva um script que apresenta as seguintes operações para o usuário:
    1- Soma
    2- Subtração
    3-Multiplicação
    4- Divisão
    5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.     

*/

let calc = {
  sum: (n1, n2) => n1 + n2,
  sub: (n1, n2) => n1 - n2,
  mult: (n1, n2) => n1 * n2,
  div: (n1, n2) => (n2 > 0 ? n1 / n2 : "divisão por zero"),
};

const prompt = require("prompt-sync")({ sigint: true });
let op;

do {
  console.log(
    "Èscolha a operação aritmética:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair\n"
  );
  op = parseInt(prompt());

  switch (op) {
    case 1: {
      let a = parseFloat(prompt("Digite o primeiro valor:"));
      let b = parseFloat(prompt("Digite o segundo valor: "));
      console.log(calc.sum(a, b));
      break;
    }
    case 2: {
      let a = parseFloat(prompt("Digite o primeiro valor: "));
      let b = parseFloat(prompt("Digite o segundo valor: "));
      console.log(calc.sub(a, b));
      break;
      te;
    }
    case 3: {
      let a = parseFloat(prompt("Digite o primeiro valor: "));
      let b = parseFloat(prompt("Digite o segundo valor: "));
      console.log(calc.mult(a, b));
      break;
    }
    case 4: {
      let a = parseFloat(prompt("Digite o primeiro valor: "));
      let b = parseFloat(prompt("Digite o segundo valor: "));
      console.log(calc.div(a, b));
      break;
    }
    case 5: {
      console.log("Saindo do programa...");
      break;
    }
    default: {
      console.log("Opção inválida, digite novamente.");
    }
  }
} while (op != 5);
