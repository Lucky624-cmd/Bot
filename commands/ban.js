module.exports= {
    name:'ban',
    description: "this Command Bans a member!",
    execute(message, args){
      const member = message.mentions.users.first();
      if(message.member.roles.cache.has('781159886560952392')){
      if(member){
         const membertarger = message.guild.members.cache.get(member.id)
         membertarger.ban();
         message.channel.send("Admins Has used banhammer to him") 
      }else
         message.channel.send('you could not use banhammer to the person')}

         else
            message.channel.send("you don't have the right permissions to use the command")
         
          
 
 
 
    }
 }