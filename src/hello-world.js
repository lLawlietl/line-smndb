const http = require("node:http");
const axios = require("axios");
const cards = require("./data.json");
const listCard = require("./data/cards/cards");

const hostname = "127.0.0.1";
const port = 3000;

//let filter = cards.filter((o) => o.element == "earth");
console.log("cards >>", listCard());

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
