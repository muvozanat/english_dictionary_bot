require('dotenv').config({path: './core/config.env'})
const { Telegraf } = require('telegraf')
const { CONFIG } = require('./core/config')
const scenesSetup = require('./middleware')
const connect = require('./core/db')

const menu = require('./messages')
const { hears } = require('./scenes/start')
const bot = new Telegraf(CONFIG.BOT_TOKEN)

// Middleware setup
scenesSetup(bot)

// Database check connect
connect()

// start command click
bot.start(ctx => {
    ctx.scene.enter('startScene')
})

bot.on("text", async (ctx) => {
    ctx.scene.enter('startScene');
})



bot.catch((err, ctx) => {
    // console.log(err)
    ctx.telegram.sendMessage(CONFIG.CHANNEL_ID, `${menu[0].errorBot}  ${err}`)
})

module.exports = bot

// Run bot with polling
bot.launch()
