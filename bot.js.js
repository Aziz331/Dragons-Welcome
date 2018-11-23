
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

var prefix = "$"
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'rool')) {
        let guild = message.mentions.members.first();
                          let ZmA = new Discord.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: ?? ????? ???? ????? ????? ??__**')
        message.member.addRole(message.guild.roles.find('name', '??? ??????'));
                    message.channel.send({embed:ZmA});
    }
});

client.login(process.env.BOT_TOKEN);