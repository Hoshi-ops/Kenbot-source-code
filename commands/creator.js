const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports = {
    name: "creator",
    description: "See The Creator Of The Bot",
}

module.exports.run = async (bot, message, args) => {
    return message.channel.send("My Creator is HoshiSakha#1945")
}