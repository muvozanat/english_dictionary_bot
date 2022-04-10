const {Scenes, session} = require('telegraf')
const startScene = require('../scenes/start')
// const dicScene = require('../scenes/dictionary')
const stage = new Scenes.Stage([startScene])
const scenesSetup = (bot)=>{
    bot.use(session())
    bot.use(stage.middleware())
}
module.exports = scenesSetup ;