const http = require("node:http");
const axios = require("axios");
const cards = require("./data.json");
const listCards = require("./data/cards/cards");

const hostname = "127.0.0.1";
const port = 3000;

//console.log("cards >>", listCards().xxx);
let filter = listCards().dataD4K.filter((o) => o.element == "earth");
let filter1 = listCards().dataStarter.filter((o) => o.element == "earth");
let filter2 = listCards().dataAlleluia.filter((o) => o.element == "earth");
//consolee.log("filter >>", filter);
let object = [];
for (data of filter) {
  object.push({
    type: "bubble",
    action: {
      type: "uri",
      uri: `https://smndb.vercel.app/images/cards/${data.pack}/${data.id}.jpg`,
    },
    hero: {
      type: "image",
      url: `https://smndb.vercel.app/images/cards/${data.pack}/${data.id}.jpg`,
      size: "full",
      aspectRatio: "10:15",
      aspectMode: "fit",
    },
  });
}

for (data of filter1) {
  object.push({
    type: "bubble",
    action: {
      type: "uri",
      uri: `https://smndb.vercel.app/images/cards/${data.pack}/${data.id}.jpg`,
    },
    hero: {
      type: "image",
      url: `https://smndb.vercel.app/images/cards/${data.pack}/${data.id}.jpg`,
      size: "full",
      aspectRatio: "10:15",
      aspectMode: "fit",
    },
  });
}

for (data of filter2) {
  object.push({
    type: "bubble",
    action: {
      type: "uri",
      uri: `https://smndb.vercel.app/images/cards/${data.pack}/${data.id}.jpg`,
    },
    hero: {
      type: "image",
      url: `https://smndb.vercel.app/images/cards/${data.pack}/${data.id}.jpg`,
      size: "full",
      aspectRatio: "10:15",
      aspectMode: "fit",
    },
  });
}

console.log("object >>", object);
// let dataD4K = [];

// var api = {
//   method: "get",
//   url: "https://smndb.vercel.app/data/d4k",
// };

// axios(api)
//   .then(function (response) {
//     //console.log("dataD4K >>", response.data);
//     const result = response.data;

//     var strippedBody = body.replace(/<!--[\s\S]*?-->/g, "")

//         console.log(strippedBody);

//         var $ = cheerio.load(strippedBody),
//         post = $(".text_exposed_root p").text();

//     let text = document.getElementById("root").textContent;
//     console.log("dataD4K3 >>", text);
//     dataD4K = result.data;
//   })
//   .catch(function (error) {
//     console.log("error >>", error);
//   });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
