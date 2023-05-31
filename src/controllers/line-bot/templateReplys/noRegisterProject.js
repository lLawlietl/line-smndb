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
          uri: "https://www.figma.com/file/q30nTaySS3PGRooKNNz0lD/Juristic-Chatbot?node-id=256:9486",
        },
        hero: {
          type: "image",
          url: "https://www.img.in.th/images/6495a53f4ec2119d22f4e076725d5c2f.png",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
          action: {
            type: "uri",
            label: "Action",
            // uri: "https://liff.line.me/1657030801-EodXR5gO?user=book",
          },
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          action: {
            type: "uri",
            label: "Action",
            // uri: "https://liff.line.me/1657030801-EodXR5gO?user=book",
          },
          contents: [
            {
              type: "text",
              text: "สมัครโครงการ",
              weight: "bold",
              size: "lg",
              wrap: true,
              contents: [],
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "สมัครโครการเพื่อลงทะเบียน",
                  weight: "regular",
                  size: "md",
                  color: "#6B6666FF",
                  flex: 0,
                  wrap: true,
                  contents: [],
                },
              ],
            },
          ],
        },
        footer: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "button",
              action: {
                type: "uri",
                label: "ลงทะเบียน",
                // uri: "https://liff.line.me/1657030801-EodXR5gO?user=book",
              },
              color: "#F6AF0DFF",
              style: "primary",
              gravity: "top",
            },
          ],
        },
      },
    ],
  },
};

module.exports = replyRegisterProject;
