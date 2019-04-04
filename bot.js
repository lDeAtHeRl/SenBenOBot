const Discord = require('discord.js');
const client = new Discord.Client();
const ayar = require('./ayar.json');
 
var prefix = ayar.prefix;


client.on('ready', () => {
  console.log(`Botunuz geldi ${client.user.tag}!`);
});


//Selamlama !
client.on('message', msg => {
  if (msg.content.toLowerCase === 'sa') {
    msg.reply('ve Âleyküm Selâm, Hoşgeldin');
  }
});

//Prefixli komutlar !
client.on('message', msg => {
  if (msg.content.toLowerCase === prefix + 'duyur') {
    msg.reply('ve Âleyküm Selâm, Hoşgeldin');
  }
});



client.login(ayar.token);