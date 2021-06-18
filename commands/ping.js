const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "A Ping Command ",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


        message.channel.send(ping);
    }
}