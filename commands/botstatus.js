
module.exports = {
    name: 'botstatus',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '780709081228640256';
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Bot Stats");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Server Stats");
 
        const redTeamEmoji = '🤖';
        const blueTeamEmoji = '📢';
        
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('React to the emoji to get the information for Bot stats or Server Stats')
            .setDescription('Tired of getting all the messages at a same channel. We got it, We made what you think\n\n'
                + `${redTeamEmoji} for Bot Status\n`
                + `${blueTeamEmoji} for Server Stats`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(blueTeamEmoji)
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole)
                  
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
            if (reaction.emoji.name === blueTeamEmoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole)
            }    
            } else {
                return;

                
                
            }
            
        });
              
    
    }


 
} 
