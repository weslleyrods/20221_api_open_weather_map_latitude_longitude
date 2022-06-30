require("dotenv").config();
const prompt = require("prompt-sync")({ sigint: true });
const axios = require("axios");

const { APPID, LANGUAGE, UNITS, PROTOCOL, BASE_URL } = process.env;
let lat;
let lon;
let url = `${PROTOCOL}://${BASE_URL}?lang=${LANGUAGE}&units=${UNITS}&appid=${APPID}`;

async function getTempLatLon() {
  console.log(`\nMenu:
    1 - para latitude e longitude
    2 - Sair
    `);
  op = parseInt(prompt());
  switch (op) {
    case 1:
      lat = prompt("Digite a latitude: ");
      lon = prompt("Digite a longitude: ");

      try {
        request = `${url}&lat=${lat}&lon=${lon}`;
        res = await axios.get(request);
        console.log(res);
        const { name } = res.data;
        const { country } = res.data.sys;
        const { temp } = res.data.main;
        console.log(`
            A temperatura atual de ${name} - ${country} é: ${temp}ºC`);
        getTempLatLon();
      } catch (e) {
        console.log(e);
        console.log("Erro!");
      }
      break;
    case 2:
      console.log("Saindo do programa...");
      break;
    default:
      console.log("Escolha uma opção válida!");
      getTempLatLon();
      break;
  }
}
getTempLatLon();
