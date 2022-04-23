require('dotenv').config();
const prompt = require('prompt-sync')({sigint: true});
const axios = require("axios");

const {APPID, LANGUAGE, UNITS, PROTOCOL, BASE_URL} = process.env;
let lat;
let lon;
let url = `${PROTOCOL}://${BASE_URL}?lang=${LANGUAGE}&units=${UNITS}&appid=${APPID}`;


const doSomething = value =>
  new Promise(resolve => 
    setTimeout(() => resolve(value >= 5 ? '1 - para lat/lon': '2 - sair'), 1000))

const loop = value =>
  doSomething(value).then(result => {
    console.log(value)
    if (result === 1 ) {
        lat = prompt("Digite a latitide: ");
        lon = prompt("Digite a longitude: ");
        
        let request = `${url}&lat=${lat}&lon=${lon}`;
        let dados = axios.get(request);
        dados.then(res => console.log(res));
              
      return loop(value + 1)
    } else {
      return false;
    }
  })

loop().then(() => console.log('all done!'))

// function getLatLon() {
//     lat = prompt("Digite a latitide: ");
//     lon = prompt("Digite a longitude: ");
//     return [lat, lon]; 
// }

// function resquest([lat, lon]){
    
//     let request = `${url}&lat=${lat}&lon=${lon}`;
//     let dados = axios.get(request);
//     dados.then(res => console.log(res.data.main.temp));
// }
// //resquest(getLatLon());

// do {
//     console.log(`Menu:
//     1 - para longitude e latitude

//     2 - Sair
// `);
// op = parseInt(prompt());
//     if(op === 1) {
//         resquest(getLatLon());
//     }
// } while(op !== 2);

// function getWeather() {

    // console.log(`Menu:
    //     1 - para longitude e latitude

    //     2 - Sair
    // `);
   
    //     let request = `${url}&lat=${lat}&lon=${lon}`;
    //     let dados = axios.get(request);
    //     dados.then(res => console.log(res));
    //     getWeather();
    // }
    // else if(op == 2){
    //     return false;
    // }
// }   
// getWeather();






// do {
//     console.log(`Menu:
//     1 - para longitude e latitude

//     2 - Sair
//     `);
//     op = parseInt(prompt());
//     switch (op) {
//         case 1:{
//             lat = prompt("Digite a latitide: ");
//             lon = prompt("Digite a longitude: ");
//             // console.log(`${url}&lat=${lat}&lon=${lon}`);

//             let request = `${url}&lat=${lat}&lon=${lon}`;
//             getWeather(request);
//             op = 2;     
//             break;
//             }
//         case 2:{
//             console.log("Saindo do programa...");
//             break;
//         }
//         default:
//             console.log("Escolha uma opção válida!");
//             break;
//     }
// } while(op !== 2);