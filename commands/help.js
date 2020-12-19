// at the top of your file
const Discord = require('discord.js');

module.exports= {
    name:'help',
    description: "this is a help embed command",
    execute(message, args, Discord){

// inside a command, event listener, etc.
const NewEmbed = new Discord.MessageEmbed()
	.setColor('YELLOW')
	.setTitle('Major Commands')
	.setAuthor('Rogue Patrol')
	.setDescription('Here you can see the major Commands which makes you to use bot')
	.addFields(
		{ name: 'Prefix', value: 'Use rp!prefix to see the prefix of the bot ||rp! is the prefix XD||' },
        { name: 'Commands', value: 'Use rp!cmd to see all the commands of the bot', inline: true },
    )
	.setImage('https://i.imgur.com/Ose6ccV.png[/img]')
	.setTimestamp()
	.setFooter('Thank you')
    
 message.channel.send(NewEmbed)

}}