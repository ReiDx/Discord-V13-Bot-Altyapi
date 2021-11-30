module.exports.event = (msg, cfg = global.config) => {
    if (msg.content.toLowerCase().startsWith("reidx ifşala")) return msg.channel.send(cfg.reidx);    
};
module.exports.help = { name: "messageCreate" };