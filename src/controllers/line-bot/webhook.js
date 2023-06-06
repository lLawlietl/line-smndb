const line = require("@line/bot-sdk");
const config = require("../../../config.json");
const configJS = require("../../../configs");
//const words = require("../../configs/words.json");
//const getDetailByGroupId = require("../../controllers/db/getDetailByGroupId");
//const reportLog = require("../db/addReportLog");

const defaultTemplate = require("./templateReplys/defaultTemplate");
const libraryTemplate = require("./templateReplys/libraryTemplate");

//const replyRegisterProject = require("./templateReplys/registerProjectDone");
const noRegister = require("./templateReplys/noRegisterProject");
//const notIngroup = require("./templateReplys/notIngroup");
//const replyReportProblem = require("./templateReplys/reportProblem");

const packs = require("./../../data/packs/packs.json");
const promotions = require("./../../data/promotions/promotions.json");
const cards = require("./../../data/cards/cards");

config.channelAccessToken = configJS.CHANNEL_ACCESS_TOKEN;
config.channelSecret = configJS.CHANNEL_SECRET;

const client = new line.Client(config);

const webhook = (req, res) => {
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  Promise.all(
    req.body.events.map(async (event) => {
      const { replyToken, message, type } = event;
      if (type === "message") {
        const { type, text } = message;
        if (type === "text") {
          console.log("TEXT");
          console.log(text.trim());
          let register = "ลงทะเบียนโครงการ :";
          let report = "ส่งคำร้อง";
          //   if (
          //     text.trim().toLowerCase() === "smart support" ||
          //     words.words.includes(text.trim())
          //   ) {
          //     var groupId = event.source.groupId;
          //     if (!groupId) {
          //       return client.replyMessage(replyToken, {
          //         type: "text",
          //         text: "รับรองการใช้งานแบบกลุ่มเท่านั้น",
          //       });
          //       // return client.replyMessage(replyToken, notIngroup);
          //     } else {
          //       var detail = await getDetailByGroupId.getDetailByGroupId(groupId);
          //       if (detail) {
          //         var userId = event.source.userId;
          //         var uriReportProblem = configJS.URL_LIFF_REPORTPROBLEM;
          //         var uri = uriReportProblem + "?user=" + userId;
          //         replyRegisterProject.contents.contents[0].hero.action.uri = uri;
          //         replyRegisterProject.contents.contents[0].footer.contents[0].action.uri =
          //           uri;

          //         if (words.words.includes(text.trim())) {
          //           reportLog(groupId, userId, text.trim());
          //         }

          //         return client.replyMessage(replyToken, replyRegisterProject);
          //       } else {
          //         var userId = event.source.userId;
          //         var uriRegister = configJS.URL_LIFF_REGISTER;
          //         var uri = uriRegister + "?user=" + userId;
          //         noRegister.contents.contents[0].hero.action.uri = uri;
          //         noRegister.contents.contents[0].body.action.uri = uri;
          //         noRegister.contents.contents[0].footer.contents[0].action.uri =
          //           uri;

          //         return client.replyMessage(replyToken, noRegister);
          //       }
          //     }
          //   } else if (text.trim().includes(register)) {
          //     let responRegister = {
          //       type: "text",
          //       text: "ลงทะเบียนโครงการสำเร็จ",
          //     };
          //     return client.replyMessage(replyToken, responRegister);
          //   } else if (text.trim().includes(report)){
          //     let categoryName = text.split(" ")[2];
          //     let messageResponse = `ขอบคุณท่านคณะกรรมการที่ไว้วางใจบริษัท SMART\r\rทีมส่วนกลางได้รับข้อมูลของท่านแล้ว เรื่อง "${categoryName}"\r\rข้อมูลของท่านจะส่งตรงไปถึงผู้บริหารและเราจะดำเนินการอย่างเร็วที่สุด`;
          //     let responReport = {
          //       type: "text",
          //       text: messageResponse,
          //     };
          //     return client.replyMessage(replyToken, responReport);
          //   }

          if (text.trim() == "smn") {
            return client.replyMessage(replyToken, defaultTemplate);
          } else if (text.trim() == "#manual") {
            const messageManual = {
              type: "text",
              text: "https://youtu.be/K0Wv6TUNGL4",
            };

            return client.replyMessage(replyToken, messageManual);
          } else if (text.trim() == "#promotion") {
            console.log("promotion >>", promotions);
            let replyPromotions = [];
            for (item of promotions.data) {
              replyPromotions.push({
                type: "bubble",
                action: {
                  type: "uri",
                  uri: item.value,
                },
                hero: {
                  type: "image",
                  url: item.value,
                  size: "full",
                  aspectRatio: "10:15",
                  aspectMode: "fit",
                },
              });
            }

            const messagePromotion = {
              type: "flex",
              altText: "Response message",
              contents: {
                type: "carousel",
                contents: replyPromotions,
              },
            };

            return client.replyMessage(replyToken, messagePromotion);
          } else if (text.trim() == "#library") {
            //console.log("libraryTemplate >>", libraryTemplate);
            let cnt = 0;
            let type = "";
            for (item of libraryTemplate.contents.contents) {
              let objectPack = [];
              if (cnt == 0) {
                type = "earth";
              } else if (cnt == 1) {
                type = "water";
              } else if (cnt == 2) {
                type = "wind";
              } else if (cnt == 3) {
                type = "fire";
              } else if (cnt == 4) {
                type = "light";
              } else if (cnt == 5) {
                type = "dark";
              }
              for (pack of packs.data) {
                objectPack.push({
                  type: "button",
                  action: {
                    type: "message",
                    label: pack.label,
                    text: `${type}-${pack.value}`,
                  },
                });
                console.log("objectPack >>", objectPack);

                objectPack.push({
                  type: "separator",
                });
              }

              item.body.contents = objectPack;

              cnt++;
            }

            console.log("libraryTemplate >>", libraryTemplate);
            return client.replyMessage(replyToken, libraryTemplate);
          } else if (text.trim().includes("-all")) {
            let type = text.trim().substring("-")[0];
            let filter = cards.dataD4K.filter((o) => o.element == type);
            consolee.log("filter >>", filter);
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
            return client.replyMessage(replyToken, {
              type: "flex",
              altText: "Response message",
              contents: {
                type: "carousel",
                contents: object,
              },
            });
          } else {
            // return client.replyMessage(replyToken, {
            //   type: "text",
            //   text: "สวัสดีครับ พิมพ์ smn เพื่อเริ่มใช้งานได้เลยครับ",
            // });
            let object = [];

            object.push({
              type: "bubble",
              action: {
                type: "uri",
                uri: `https://github.com/lLawlietl/line-smndb/blob/2a9c8dcd4196d33b359f91ed3e6f412e04a71cfa/src/images/021.jpg`,
              },
              hero: {
                type: "image",
                url: `https://github.com/lLawlietl/line-smndb/blob/2a9c8dcd4196d33b359f91ed3e6f412e04a71cfa/src/images/021.jpg`,
                size: "full",
                aspectRatio: "10:15",
                aspectMode: "fit",
              },
            });

            object.push({
              type: "bubble",
              action: {
                type: "uri",
                uri: `https://github.com/lLawlietl/line-smndb/blob/master/src/images/021.jpg`,
              },
              hero: {
                type: "image",
                url: `https://github.com/lLawlietl/line-smndb/blob/master/src/images/021.jpg`,
                size: "full",
                aspectRatio: "10:15",
                aspectMode: "fit",
              },
            });

            return client.replyMessage(replyToken, {
              type: "flex",
              altText: "Response message",
              contents: {
                type: "carousel",
                contents: object,
              },
            });
          }

          var userId = event.source.userId;
          //var uriRegister = configJS.URL_LIFF_REGISTER;
          //var uri = uriRegister + "?user=" + userId;
          //noRegister.contents.contents[0].hero.action.uri = uri;
          //noRegister.contents.contents[0].body.action.uri = uri;
          //noRegister.contents.contents[0].footer.contents[0].action.uri = uri;

          return client.replyMessage(replyToken, noRegister);
        }
      }

      if (type === "join") {
        return client.replyMessage(replyToken, {
          type: "text",
          text: "สวัสดีครับ SMART SUPPORT มาแล้วครับ พิมพ์ SMART SUPPORT เพื่อเรียกใช้งานได้เลยครับ",
        });
      }
    })
  )
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
};

module.exports = webhook;
