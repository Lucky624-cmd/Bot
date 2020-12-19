
module.exports = {
    name: 'gameroles',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '780709081228640256';
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Valorant");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Fallguys");
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name ==="Pubg Mobile")
 
        const redTeamEmoji = '🔴';
        const blueTeamEmoji = '🔵';
        const yellowTeamEmoji = '🟡'
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${redTeamEmoji} for Valorant\n`
                + `${blueTeamEmoji} for Fall Guys\n `
                + `${yellowTeamEmoji} for Pubg Mobile`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(yellowTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole)
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
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole)
                }
            } else {
                return;

                
                
            }
            
        });
              
    
    }


 
} 
