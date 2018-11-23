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
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | ???? ?? ??? ??? ????' , `????? ?? ?? ???????, ${member}`)
        .addField(':        id: | user :', "**[" + `${member.id}` + "]**" )
                .addField(':arrow_right:| ??? ????? ???',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' ????????', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`??? ??? ???? :( :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`?? ??????? ???? :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   ????',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====???? ?????????====`)
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })

client.login(process.env.BOT_TOKEN);