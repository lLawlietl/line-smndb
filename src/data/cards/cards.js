const fetch = require("node-fetch");

const listCard = () => {
  // https://smndb.vercel.app/data/d4k
  // https://smndb.vercel.app/data/starter
  // https://smndb.vercel.app/data/alleluia

  let dataD4K = [];
  let dataStarter = [];
  let dataAlleluia = [];

  let url = "https://smndb.vercel.app/data/d4k";
  let settings = { method: "Get" };

  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      // do something with JSON
      console.log("dataD4K >>", json);
      dataD4K = json2array(json);
    });

  url = "https://smndb.vercel.app/data/starter";
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      // do something with JSON
      console.log("dataStarter >>", json);
      dataStarter = json2array(json);
    });

  url = "https://smndb.vercel.app/data/alleluia";
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      // do something with JSON
      console.log("dataAlleluia >>", json);
      dataAlleluia = json2array(json);
    });

  return {
    dataD4k: dataD4K,
    dataStarter: dataStarter,
    dataAlleluia: dataAlleluia,
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
