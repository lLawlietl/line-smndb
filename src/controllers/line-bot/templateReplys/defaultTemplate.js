// const registerImage = require('../../../asset/images/register.png');
const replyRegisterProject = {
  type: "flex",
  altText: "Response message",
  contents: {
    type: "carousel",
    contents: [
      {
        type: "bubble",
        action: {
          type: "uri",
          uri: "https://smndb.vercel.app/images/cards/alleluia/014.jpg",
        },
        hero: {
          type: "image",
          url: "https://smndb.vercel.app/images/cards/alleluia/014.jpg",
          size: "full",
          aspectRatio: "10:15",
          aspectMode: "fit",
        },
      },
      {
        type: "bubble",
        action: {
          type: "uri",
          uri: "https://smndb.vercel.app/images/cards/alleluia/015.jpg",
        },
        hero: {
          type: "image",
          url: "https://smndb.vercel.app/images/cards/alleluia/015.jpg",
          size: "full",
          aspectRatio: "10:15",
          aspectMode: "fit",
        },
      },
    ],
  },
};

module.exports = replyRegisterProject;
