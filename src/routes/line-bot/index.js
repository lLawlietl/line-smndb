const express = require("express");
const app = express();
const router = express.Router();
const lineBotController = require("../../controllers/line-bot");

// app.use(line.middleware(config));

// app.use((err, req, res, next) => {
//   if (err instanceof SignatureValidationFailed) {
//     res.status(401).send(err.signature);
//     return;
//   } else if (err instanceof JSONParseError) {
//     res.status(400).send(err.raw);
//     return;
//   }
//   next(err); // will throw default 500
// });

router.post("/webhook", lineBotController.webhook);

module.exports = router;
