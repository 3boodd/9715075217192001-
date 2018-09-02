const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.on(`ready`, () => console.log(`Ready!`))
const channels = {};


 
client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
