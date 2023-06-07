const axios = require("axios");
const mockD4K = require("./mockD4K.json");
const mockStarter = require("./mockStarter.json");
const mockAlleluia = require("./mockAlleluia.json");

const listCard = async () => {
  // https://smndb.vercel.app/data/d4k.json
  // https://smndb.vercel.app/data/starter.json
  // https://smndb.vercel.app/data/alleluia.json

  let responseD4K = [];
  let responseStarter = [];
  let responseAlleluia = [];

  //return json2array(mockD4K);

  responseD4K = await axios({
    url: `https://smndb.vercel.app/data/d4k.json`,
    method: "GET",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  responseStarter = await axios({
    url: `https://smndb.vercel.app/data/starter.json`,
    method: "GET",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  responseAlleluia = await axios({
    url: `https://smndb.vercel.app/data/alleluia.json`,
    method: "GET",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    dataD4K: responseD4K,
    dataStarter: responseStarter,
    dataAlleluia: responseAlleluia,
  };
};

// const json2array = (json) => {
//   var result = [];
//   var keys = Object.keys(json);
//   keys.forEach(function (key) {
//     result.push(json[key]);
//   });

//   return result;
// };

module.exports = listCard;
