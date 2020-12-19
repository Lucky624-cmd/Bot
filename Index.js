const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})
 

 
const prefix = 'rp!';
 
const fs = require('fs');
const roguepatrol = require('./commands/roguepatrol');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
 
  client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
  console.log('Rogue Patrol is online!');
 
 
 
});

client.on('ready', () => {
  client.user.setActivity(`${prefix}help`)
  console.log(`${client.user.username} ✅`)})


 
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  } else if (command === 'roguepatrol') {
    client.commands.get('roguepatrol').execute(message, args);
  } else if (command === 'latheshgaming') {
    client.commands.get('latheshgaming').execute(message, args);
  } else if (command === 'kick') {
    client.commands.get('kick').execute(message, args);
  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args)
  } else if (command === "clear") {
    client.commands.get('clear').execute(message, args)
  } else if (command === "mute") {
    client.commands.get('mute').execute(message, args)
  } else if (command === "unmute") {
    client.commands.get('unmute').execute(message, args)
  } else if (command ==='cmd'){
    client.commands.get('cmd').execute(message, args);
  } else if (command ==='prefix'){
    client.commands.get('prefix').execute(message,args);
  } else if (command === 'aboutme'){
    client.commands.get('aboutme').execute(message, args);
  } else if (command ==='aboutthisserver'){
    client.commands.get('abouthisserver').execute(message, args);
  } else if (command ==='agree'){
    client.commands.get('agree').execute(message,args)
  } else if (command ==='help'){
    client.commands.get('help').execute(message, args, Discord)
  } else if (command ==='gameroles'){
    client.commands.get('gameroles').execute(message, args, Discord, client)
  } else if (command === 'botstatus'){
    client.commands.get('botstatus').execute(message, args, Discord, client)
  } else if (command === 'rules'){
    client.commands.get('rules').execute(message, args, Discord)
  }
 
})
 
 
client.login('NzgxMDMzNDAzNTU4NTI3MDI2.X73wCg.kB6Dhc6IDGbjO24VSpQkhhf_8I0')