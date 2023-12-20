/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
const { ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guide')
        .setDescription('Get a helpful guide'),

    async execute(interaction) {
        const confirm = new ButtonBuilder()
            .setCustomId('Primary')
            .setLabel('Confirm ')
            .setStyle(ButtonStyle.Primary);

        // Cancel button
        const cancel = new ButtonBuilder()
            .setCustomId('cancel')
            .setLabel('Cancel')
            .setStyle(ButtonStyle.Danger);

        const repoLinkButton = new ButtonBuilder()
            .setLabel('Repository Link')
            .setURL('https://github.com/RVCC-IDMX/my-bot-Sikholiwe132')
            .setStyle(ButtonStyle.Link);

        // send the interaction response with buttons
        await interaction.reply({
            content: 'Please select an action:',
            components: [
                {
                    type: 1, // Action Row
                    components: [confirm, cancel],
                },
                {
                    type: 1, // Action Row for Link buttons
                    components: [repoLinkButton],
                },
            ],
        });
    },
};
