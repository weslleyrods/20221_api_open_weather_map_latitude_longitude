const prompts = require("prompts");
let calc = {
  ops: [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => (n2 > 0 ? n1 / n2 : "divisão por zero"),
  ],
};

const questions = [
  {
    type: "number",
    name: "val1",
    message: "Digite o primeiro valor: ",
  },
  {
    type: "number",
    name: "val2",
    message: "Digite o segundo valor: ",
  },
];

const calculator = async () => {
  const { opt } = await prompts({
    type: "number",
    name: "opt",
    message:
      "Escolha uma operação: \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair\n",
    validate: (value) =>
      value > 0 && value <= 5 ? true : "Digite uma opção entre 1 - 5",
  });
  if (opt === 5) {
    console.log("Saindo...");
    return false;
  }
  (async () => {
    const { val1, val2 } = await prompts(questions);
    console.log(`Resultado da operação: ${calc.ops[opt - 1](val1, val2)}`);
    calculator();
  })();
};
calculator();
