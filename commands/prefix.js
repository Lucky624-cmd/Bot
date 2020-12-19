module.exports= {
    name:'prefix',
    description: "this command tells my prefix",
    execute(message, args){
       message.channel.send('My prefix is "rp!" is this. Wanna know my commands type rp!cmd to know what all i can do ');
         
    }
}