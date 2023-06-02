const line = require("@line/bot-sdk");
const config = require("../../../config.json");
const configJS = require("../../../configs");
//const words = require("../../configs/words.json");
//const getDetailByGroupId = require("../../controllers/db/getDetailByGroupId");
//const reportLog = require("../db/addReportLog");

const defaultTemplate = require("./templateReplys/defaultTemplate");
//const replyRegisterProject = require("./templateReplys/registerProjectDone");
const noRegister = require("./templateReplys/noRegisterProject");
//const notIngroup = require("./templateReplys/notIngroup");
//const replyReportProblem = require("./templateReplys/reportProblem");
console.log("XX >>", configJS.CHANNEL_ACCESS_TOKEN);
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
