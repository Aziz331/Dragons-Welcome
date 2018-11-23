
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

client.on('message', function(message) {//by turkyKSA12
    if(!message.channel.guild) return;
if(message.content ===  '$color 140') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('???? ??? ??????? |:white_check_mark:')
}else{
message.channel.send('?? ???? ??????? ???????  |:x:')
}
}
});

client.on('message', message=>{
if (message.content ===  '$color 140'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 141; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});

client.login(process.env.BOT_TOKEN);