const { Scenes, Composer } = require('telegraf')
const User = require('../modal/User')
const { CONFIG } = require('../core/config')
const axios = require('axios')
const menu = require('../messages')
const { getData, getDatas, notFound } = require('../functions')
// const getDatas = require('../functions')
// const notFound = require('../functions')
const started = new Composer()

started.start(async (ctx) => {
    ctx.replyWithHTML(menu[0].greeting)
    let user__name = (ctx.from?.first_name) ? ((ctx.from.last_name) ? ctx.from.first_name + " " + ctx.from.last_name : ctx.from.first_name) : (ctx.from.last_name)
    let nick__name = (ctx.from?.username) ? (ctx.from.username) : (menu[0].notFoundUsername)
    let addUser = {
        name: user__name,
        tg_id: parseInt(ctx.from.id),
        ban: false,
        status: menu[0].positionNewUser,
        username: nick__name
    }

    // base check user id
    const checkId = await User.findOne({ tg_id: addUser.tg_id })
    if (!checkId) {
        User.create(addUser)
        let msg = `
${menu[0].allUsers}: ${await User.count()}
${menu[0].newUser}:  <a href="tg://user?id=${ctx.from.id}">${addUser.name}</a>
`
        await ctx.telegram.sendMessage(CONFIG.CHANNEL_ID, msg, {
            parse_mode: "HTML"
        })
    } else {
        // ban:  for true value
    }

})

started.on('message', async (ctx) => {
    let word = encodeURI(ctx.message.text);

    let rest = await axios.get(`https://www.abbreviations.com/services/v2/syno.php?uid=${CONFIG.UID}&tokenid=${CONFIG.API_TOKEN}&word=${word}&format=json`)
        .then(res => {
            if (Object.prototype.toString.call(res.data.result) == "[object Array]") getDatas(res.data.result, ctx)  
            else if (Object.prototype.toString.call(res.data.result) == "[object Object]") getData(res.data.result, ctx)
            else notFound(word, ctx)
        })
        .catch(err => ctx.telegram.sendMessage(CONFIG.CHANNEL_ID, `${menu[0].errorBot}  ${err}`))
})

started.command('send', (ctx) => {
    ctx.wizard.next()
})

const brodcast = new Composer();
brodcast.on('text', async (ctx) => {
    await ctx.replyWithHTML('Xabarizni  yuboring')
})


const startes = new Scenes.WizardScene('startScene', started, brodcast)
module.exports = startes