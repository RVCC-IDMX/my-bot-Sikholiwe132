/* eslint-disable indent */
const { SlashCommandBuilder } = require('discord.js');

/* eslint-disable no-undef */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('secretping')
        .setDescription('Replies with secret pong!'),
    async execute(interaction) {
        await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
    },
};
