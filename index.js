const { Client, Intents, Collection } = require('discord.js');
const config = global.config = require("./config.json");
const client = global.client = new Client({ intents: config.intents });
const fs = require('fs')
client.commands = new Collection();

require("./fonksiyonlar/komutyukle.js")(fs, client);

client.login(config.token);

require("./fonksiyonlar/eventyukle.js")(fs, client);