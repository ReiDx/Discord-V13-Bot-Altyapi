module.exports.event = async (interaction, cfg = global.config) => {
    if (interaction.isCommand()) {
        const komut = client.commands.get(interaction.commandName);
        if (!komut) return;
        await komut.calis(interaction);
    }
};
module.exports.help = { name: "interactionCreate" };