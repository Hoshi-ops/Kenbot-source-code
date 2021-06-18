const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`k!kick`', 'Kicks a member from your server via mention or ID')
        .addField('`k!mute`', 'Mutes A User')
        .addField('`k!unmute`', 'Unmute Muted User')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`k!meme`', 'Generates a random meme')
        .addField('`k!comment`', 'Generate A Yotube Comment')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`k!ping`', 'Get the bot\'s API ping')
        .addField('`k!weather`', 'Checks weather forecast for provided location')
        .addField('`k!creator`', 'See The Creator Of The Bot')
        .setTimestamp()

        const music = new Discord.MessageEmbed()
        .setTitle('music')
        .addField('`k!play`', 'To Play A Music From YT ')
        .addField('`k!stop`', 'To Stop The Running Queue')
        .addField('`k!skip`', 'To Skip The Running Queue')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility,
                music
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}