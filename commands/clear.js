module.exports= {
    name:'clear',
    description: "this command clear messages",
    async  execute(message, args){

       // if(message.member.roles.cache.has('780397222394069013')){
       if (!args[0]) return message.reply("please enter the amount of messages that you want to clear!");
       if(isNaN(args[0])) return message.reply("please enter a real number")
       if (args[0] >100) return message.reply("you canno't delete more than 100 messages");
       if (args[0] < 1) return message.reply ("you must delete atleast one message")
    
       await message.channel.messages.fetch({limit:args[0]}).then(messages =>
            message.channel.bulkDelete(messages))}


           // else
             // message.channel.send("you don't have the right permissions to send that command")
   
    
       

        
       
     
       
       
       }
//};