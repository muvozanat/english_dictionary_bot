require('dotenv').config()
const  CONFIG =  {
    UID: process.env.UID || 10043,
    BOT_TOKEN: process.env.BOT_TOKEN ,
    API_TOKEN: process.env.API_TOKEN ,
    MONGO_LINK: process.env.MONGO_LINK ,
    CHANNEL_ID: process.env.CHANNEL_ID,
}

module.exports = {CONFIG}

