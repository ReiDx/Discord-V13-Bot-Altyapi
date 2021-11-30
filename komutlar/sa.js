module.exports = {
    komutAdi: "sa",
    aciklama: "sa mesajı yazdırır",
    sadeceAdmin: 0,
    uyelerKullanabilir: 1,
    botKomutYetkisindekilerKullanabilir: 1,
    calis: async (interaction, client = global.client, config = global.config) => {
        interaction.reply("sa");
    }
}