module.exports.event = (msg, cfg = global.config) => {
    console.log(`${client.user.tag} olarak giriş yapıldı!`);
};
module.exports.help = { name: "ready" };