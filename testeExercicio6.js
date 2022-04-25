require("dotenv").config();
const prompts = require("prompts");
const axios = require("axios");

const { APPID, LANGUAGE, UNITS, PROTOCOL, BASE_URL } = process.env;
let url = `${PROTOCOL}://${BASE_URL}?lang=${LANGUAGE}&units=${UNITS}&appid=${APPID}`;

const getWather = async (url, lat, lon) => {
  try {
    const { data } = await axios.get(`${url}&lat=${lat}&lon=${lon}`);
    console.log(`Temperatura = ${Math.round(data.main.temp)}°C`);
  } catch (e) {
    console.log("Erro ao buscar a temperatura atual, tente novamente.");
    console.log(e);
  }
};

const currentWeather = () => {
  let questions = [
    {
      type: "number",
      name: "lat",
      message: "Digite a latitude",
    },
    {
      type: "number",
      name: "lon",
      message: "Digite a longitude",
    },
  ];

  (async () => {
    const { opt } = await prompts({
      type: "number",
      name: "opt",
      message: "\n1 - Passar latitude e longitude\n2 - Sair\n",
      validate: (value) =>
        value >= 1 && value <= 2 ? true : "Digite uma opção válida!",
    });
    if (opt === 2) {
      console.log("Saindo...");
    } else {
      (async () => {
        const { lat, lon } = await prompts(questions);
        // chamada da requisicao aqui
        await getWather(url, lat, lon);
        currentWeather();
      })();
    }
  })();
};
currentWeather();
