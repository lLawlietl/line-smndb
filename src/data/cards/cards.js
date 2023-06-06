const axios = require("axios");

const listCard = async () => {
  // https://smndb.vercel.app/data/d4k
  // https://smndb.vercel.app/data/starter
  // https://smndb.vercel.app/data/alleluia

  let dataD4K = [];
  let dataStarter = [];
  let dataAlleluia = [];

  let url = "https://smndb.vercel.app/data/d4k";

  // fetch(url, settings)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     // do something with JSON
  //     console.log("dataD4K >>", json);
  //     dataD4K = json2array(json);
  //   });

  var api = {
    method: "get",
    url: "https://smndb.vercel.app/data/d4k",
  };

  await axios(api)
    .then(function (response) {
      console.log("dataD4K >>", response);
      const result = response.data;
      dataD4K = result.data;
    })
    .catch(function (error) {
      console.log("error >>", error);
    });

  return {
    dataD4k: dataD4K,
    //dataStarter: dataStarter,
    //dataAlleluia: dataAlleluia,
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
