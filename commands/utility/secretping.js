/* eslint-disable indent */
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('secretping')
        .setDescription('Replies with secret pong!'),
    async execute(interaction) {
        // Ephemeral response in a private message
        await interaction.reply({ content: 'Secret pong!', ephemeral: true });
    },
};
