const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types');
const { clientId, guildId, token } = require('../../config.json');

const commands = [
    new SlashCommandBuilder().setName('hello').setDescription('Says hello world!'),
    new SlashCommandBuilder().setName('server').setDescription('Says the server info.'),
    new SlashCommandBuilder().setName('user').setDescription('Says user info.')
].map(command => command.toJSON);

const rest = new REST({ version: '0.23.1' }).setToken(token);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
})();