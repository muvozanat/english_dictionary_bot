const menu = require('../messages')
const getDatas = (result, ctx) => {
        
        result.map((item) => {
                literal = `
<i>${menu[0].term}</i> ${item.term}

<i>${menu[0].definition}</i> ${item.definition}

<i>${menu[0].example}</i> ${item.example?.length != undefined ? item.example : "Not examples"}

<i>${menu[0].partOfSpeech}</i> ${item.partofspeech}

<i>${menu[0].synonyms}</i> ${item.synonyms?.length != undefined ? item.synonyms : "Not has Synonyms"}

<i>${menu[0].antonyms}</i> ${item.antonyms?.length != undefined ? item.antonyms : "Not has Antonyms"}`

                ctx.replyWithHTML(literal)
        })
}


// API takes more queries

module.exports = { getDatas }