const menu = require('../messages')
const getData = async (result, ctx) => {
    literal = `
<i>${menu[0].term}</i> ${result.term}

<i>${menu[0].definition}</i> ${result.definition}

<i>${menu[0].example}</i> ${result.example}

<i>${menu[0].partOfSpeech}</i> ${result.partofspeech}

<i>${menu[0].synonyms}</i> ${result.synonyms?.length != undefined ? result.synonyms : "Not has Synonyms"}

<i>${menu[0].antonyms}</i> ${result.antonyms?.length != undefined ? result.antonyms : "Not has Antonyms"}`
    await ctx.replyWithHTML(literal)
}


// API take one query

module.exports = {getData}