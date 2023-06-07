const defaultTemplate = {
  type: "flex",
  altText: "Response message",
  contents: {
    type: "carousel",
    contents: [
      {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: "รวมข้อมูลการ์ด",
              weight: "bold",
              size: "xl",
              wrap: true,
              action: {
                type: "message",
                label: "คลังการ์ด",
                text: "#library",
              },
              contents: [],
            },
          ],
        },
      },
      {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: "Deck List TOP 8",
              weight: "bold",
              size: "xl",
              wrap: true,
              action: {
                type: "message",
                label: "Top8",
                text: "#top8",
              },
              contents: [],
            },
          ],
        },
      },
      {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: "Ristrict & Ban",
              weight: "bold",
              size: "xl",
              wrap: true,
              action: {
                type: "message",
                label: "Ban",
                text: "#ban",
              },
              contents: [],
            },
          ],
        },
      },
      {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://sv1.picz.in.th/images/2023/06/07/IzkFYg.jpg",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: "โปรโมชันซองแลกการ์ด",
              weight: "bold",
              size: "xl",
              wrap: true,
              action: {
                type: "message",
                label: "Promotions",
                text: "#promotion",
              },
              contents: [],
            },
          ],
        },
      },
      {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: "วิธีการเล่นพื้นฐาน",
              weight: "bold",
              size: "xl",
              wrap: true,
              action: {
                type: "message",
                label: "How to",
                text: "#manual",
              },
              contents: [],
            },
          ],
        },
      },
      {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: "Q&A",
              weight: "bold",
              size: "xl",
              wrap: true,
              action: {
                type: "message",
                label: "Q&A",
                text: "#q&a",
              },
              contents: [],
            },
          ],
        },
      },
    ],
  },
};

module.exports = defaultTemplate;
