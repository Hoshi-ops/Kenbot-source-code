const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports = {
    name: "invite",
    description: "Invite Me To Ur Server",
}

module.exports.run = async (bot, message, args) => {
    return message.channel.send("https://dsc.gg/kenbot")
}