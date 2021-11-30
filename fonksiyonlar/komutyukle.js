const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = (fs, client) => {
    const komutlar = [];   
    const komutlarJS = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'));
    komutlarJS.forEach((komut) => {
        komut = require(`./../komutlar/${komut}`);
        komutlar.push(new SlashCommandBuilder().setName(komut.komutAdi).setDescription(komut.aciklama));
        client.commands.set(komut.komutAdi, komut);
    })
    let BOT_ID = config.bot_id;
    let SUNUCU_ID = config.sunucu_id;

    const rest = new REST({ version: '9' }).setToken(config.token);

    (async () => {
    try {
        console.log('Bot (/) komutlarını yeniden yüklenmeye başladı.');

        await rest.put(
        Routes.applicationGuildCommands(BOT_ID, SUNUCU_ID),
        { body: komutlar },
        );

        console.log('Botun (/) komutları başarıyla yeniden yüklendi.');
    } catch (error) {
        console.error(error);
    }
    })();
};