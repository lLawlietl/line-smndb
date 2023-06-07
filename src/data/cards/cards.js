const axios = require("axios");
const mockD4K = require("./mockD4K.json");
const mockStarter = require("./mockStarter.json");
const mockAlleluia = require("./mockAlleluia.json");

const listCard = async () => {
  //   https://smndb.vercel.app/data/d4k.json
  // https://smndb.vercel.app/data/starter.json
  // https://smndb.vercel.app/data/alleluia.json

  let responseD4K = [];
  // let dataStarter = [];
  // let dataAlleluia = [];

  //return json2array(mockD4K);

  responseD4K = await axios({
    url: `https://smndb.vercel.app/data/d4k.json`,
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    // },
  })
    .then((res) => {
      // console.log(
      //   "ressss",
      //   res.data.filter((o) => o.element == "earth")
      // );
      //cards.jsreturn json2array(res.data).filter((o) => o.element == "earth");
      return res.data.filter((o) => o.element == "earth");
    })
    .catch(() => {});

  //console.log("responseD4K >>>", responseD4K);

  return {
    dataD4K: responseD4K,
    // dataStarter: mockStarter,
    // dataAlleluia: mockAlleluia,
  };
};

const json2array = (json) => {
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });

  return result;
};

module.exports = listCard;
