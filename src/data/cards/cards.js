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
      dataD4K = json;
    });

  url = "https://smndb.vercel.app/data/starter";
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      // do something with JSON
      dataStarter = json;
    });

  url = "https://smndb.vercel.app/data/alleluia";
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      // do something with JSON
      dataAlleluia = json;
    });

  return {
    dataD4k: dataD4K,
    dataStarter: dataStarter,
    dataAlleluia: dataAlleluia,
  };
};

module.exports = listCard;
