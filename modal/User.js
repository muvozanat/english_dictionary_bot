const mongoose = require('mongoose')

const UserBase = mongoose.Schema({
    name: String,
    tg_id: Number,
    ban: Boolean,
    status: String,
    username: String
})

const User = mongoose.model("users", UserBase)

module.exports = User