module.exports= {
   name:'kick',
   description: "this Command kicks a member!",
   execute(message, args){
     const member = message.mentions.users.first();
     if(message.member.roles.cache.has('781159886560952392')){  
     if(member){
        const membertarger = message.guild.members.cache.get(member.id)
        membertarger.kick();
        message.channel.send("User has been throwed from the server");
     }else
        message.channel.send('you could not throw that member from the server')}

        else
        message.channel.send("you don't have the right permissions to use the command")

       
       


   }
}