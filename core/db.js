const mongoose = require('mongoose')

const connect = ()=>{
    try {
        mongoose.connect(process.env.MONGO_LINK)
        console.log('Bazaga ulandi')
    } catch (error) {
        console.log(`Xatolik: ${error.message}`)
    }
}

module.exports = connect;
