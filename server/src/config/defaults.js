
require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  LOCAL_CLIENT_SECOND: process.env.LOCAL_CLIENT_SECOND,
  CLIENT_VERCEL: process.env.CLIENT_VERCEL,
  CLIENT_FIREBASE: process.env.CLIENT_FIREBASE,
};

module.exports = Object.freeze(config);
