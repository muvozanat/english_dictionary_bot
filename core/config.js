require('dotenv').config()
const  CONFIG =  {
    UID: process.env.UID || 10043,
    BOT_TOKEN: process.env.BOT_TOKEN || '5254817857:AAHRsu9SoR04xqezh5szDbRcN24bDm9bPPo',
    API_TOKEN: process.env.API_TOKEN || 'iSkDe4Q4X7mDNYLK',
    MONGO_LINK: process.env.MONGO_LINK || 'mongodb+srv://DostonKarimov:DostonKarimov@cluster0.h5ied.mongodb.net/myFirstDatabase',
    CHANNEL_ID: process.env.CHANNEL_ID || -1001669509893,
}

module.exports = {CONFIG}

