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
      request = `${url}&lat=${lat}&lon=${lon}`;
      try {
        let pegarInfo = await axios.get(request);
        console.log("A cidade " + pegarInfo.data.name);
        console.log("esta com a temperatura " + pegarInfo.data.main.temp);
        getTempLatLon();
      } catch (e) {
        console.log("localização não encontrada");
        getTempLatLon();
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
