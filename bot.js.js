
const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "??????";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***???? ????????? ?????***" ,member.user.username )
    .setDescription('***??? ?? ??????? ???? ??????? ?????? ?? ???? ???? ??????? ??????? ????***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('#✽-chat', 'chat-arabjoker')
if (!channel) return;
channel.send({embed : embed});
});

client.login(process.env.BOT_TOKEN);
