const menu = require('../messages')
const notFound = async (word, ctx) => {
    ctx.reply(decodeURI(word) + menu[0].notFoundAndExampleSearch)
}


module.exports = {notFound}