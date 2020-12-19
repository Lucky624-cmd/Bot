module.exports= {
    name:'agree',
    description: "this is command agrees rules",
    async execute(message, args){

        if (!args[0]) return message.reply("Please type 1 so that We can make you tu enter");
        if(isNaN(args[0])) return message.reply("please enter the number 1")
        if (args[0] > 1) return message.reply("Please type 1 so that We can make you to enter ");
        if (args[0] < 1) return message.reply ("Please type 1 so that We can make you to enter")

        await message.channel.messages.fetch({limit:args[0]}).then(messages =>
            message.channel.bulkDelete(messages))
    
          message.member.roles.add("742993885390700614")
        
        
     
       
          
         if(message.member.roles.cache.has('742993885390700614'))
             return message.reply("This command is only for new members who need a specific permissions to enter our Patrol")



            


    } 
    
          

}