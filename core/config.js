require('dotenv').config()
const  CONFIG =  {
    UID: process.env.UID,
    BOT_TOKEN: process.env.BOT_TOKEN ,
    API_TOKEN: process.env.API_TOKEN ,
    MONGO_LINK: process.env.MONGO_LINK ,
    CHANNEL_ID: process.env.CHANNEL_ID,
}

module.exports = {CONFIG}

