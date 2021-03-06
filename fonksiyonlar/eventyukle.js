module.exports = (fs, client) => {
    fs.readdir("./eventler/", (err, files, events = []) => {
      if (err) return console.log(err);
      console.log("--------------------------");
      console.log("Eventler yükleniyor.");
      files.filter(f => f.endsWith(".js")).forEach(file => {
        let prop = require(`../eventler/${file}`);
        client.on(prop.help.name, prop.event);
        events.push(prop.help.name);
      });
      console.log("[" + events.join(", ") + "] " +  " isimli event(ler) yüklendi.");
      console.log("--------------------------");
    });
  };