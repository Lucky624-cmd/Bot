const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'rules',
    description: 'This is a rule embed command',
    execute(message, args, Discord){

        const NewEmbed = new Discord.MessageEmbed()
        .setColor('#ffdc00')
        .setImage('https://i.imgur.com/Ose6ccV.png[/img]')

        message.channel.send(NewEmbed)

        const NewEmbed1 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle("Welcome to the Rogue Patrol Discord's Server :)")
        .setDescription("This is our Official discord server for Rogue Patrol and for for... okay nevermind . Here you can chat with other members, find players to team up with, provide feedback to improve this server , get support, receive news about Youtube Videos and games to stay-up-to date, and more!\n To ensure members have an enjoyable experience and to maintain a welcoming environment in our Discord server, all users automatically by joining this server agree to abide by and accept all of the rules and community guidelines listed below. Before interacting within our server, we ask of you to read the rules and community guidelines thoroughly. The management team reserves the right to remove, change, or modify the server rules and community guidelines at any time without prior notice.\n Note: If any user is found in violation of our rules and community guidelines, then the staff team reserves the right to take disciplinary action against said user. Depending upon the severity of the offense, you may be warned, kicked, muted (temporarily or permanently), or banned (temporarily or permanently).")
        .setFooter("This server is maintained by ... <- him")

        message.channel.send(NewEmbed1)

        const NewEmbed2 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setImage('https://cdn.discordapp.com/attachments/744558611186843767/788319561803497492/rules.png')
        
        message.channel.send(NewEmbed2)

        const NewEmbed3 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle("[1]. Behaviour")
        .setDescription("We expect all of our members to be civil and considerate to others. Do not behave like the following: \n :white_small_square:[1.1] Having abusive, threatening, harassing, toxic, and/or disrespectful manner or behavior.\n :white_small_square:[1.2] Any form of spamming or flooding of letters, numbers, images, emotes, and/or links.\n :white_small_square:[1.3] Impersonating a user, member(s) of the staff team, or Moderator Team or Admins or Owner.\n :white_small_square:[1.4] Distributing or leaking of a user's personal information without their consent.\n :white_small_square:[1.5] Attacking a user's race, religion, sexuality, nationality, ethnicity, or any other forms of bigotry.")
    
        message.channel.send(NewEmbed3)

        const NewEmbed4 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle('[2]. Content')
        .setDescription("We expect our members to comply with the content guidelines and not do the following:\n :white_small_square:[2.1] Posting messages and/or content in the wrong channel.\n :white_small_square:[2.2] Discussing about explicit (political, religious, etc.) or controversial topics.\n :white_small_square:[2.3] Posting or sharing of suspicious, unsafe, or inappropriate links, images and emojis.\n :white_small_square:[2.4] Posting or sharing of illegal, copyrighted, or NSFW content.\n :white_small_square:[2.5] Promoting or sharing of any hacks, cheats, or malicious applications and programs.")
        .setFooter("")
        
        message.channel.send(NewEmbed4)

        const NewEmbed5 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle("[3]. Advertisement")
        .setDescription("We expect our memebers to comply with the advertisement guidelines and not do the following:\n :white_small_square: [3.1] Advertising of unauthorized Discord servers (e.g. personal Discord server).\n :white_small_square:[3.2] Advertising or promotion of a user's YouTube channel, Twitch, or other social medias, unless allowed in a specified channel.\n :white_small_square:[3.3] Advertising or promotion of other games, communities, or organizations.\n :white_small_square:[3.4] Advertising or promotion of petitions and fundraisers.")
        .setFooter("")
        
        message.channel.send(NewEmbed5)

        const NewEmbed6 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle("[4]. Discord Profile")
        .setDescription("We expect our members to comply with the Discord profile guidelines and not do the following:\n :white_small_square:[4.1] Is not easily @mentionable.\n :white_small_square:[4.2] Have an inappropriate profile picture, username/nickname, or status.\n :white_small_square:[4.3] Have an excessive amount of special characters, emojis, or symbols in their nicknames.\n :white_small_square:[4.4] Have unauthorized alt or bot accounts in the server.")
        .setFooter("")

        message.channel.send(NewEmbed6)

        const NewEmbed7 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle("[5]. Voice Channels")
        .setDescription("We expect all of our members to follow and behave like the following:\n :white_small_square:[5.1] All server rules apply when communicating in our voice channels.\n :white_small_square:[5.2] Before recording the audio of a voice channel you must have the consent of all parties.\n :white_small_square:[5.3] Do not cause a disturbance by creating irritating or loud voices/sounds/audio, this includes playing distorted audio, as well as text-to-speak and voice changers.\n :white_small_square:[5.4] 🎶 Songs should not be longer than five {5} minutes or have excessive amount of profanities.\n :white_small_square:[5.5] 🎶 English or non English songs are acceptable. We strongly advise to only play popular or mainstream songs. ")
        .setFooter("")

        message.channel.send(NewEmbed7)

        const NewEmbed8 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle("[6]. Additional Information")
        .setDescription("The following rules and guidelines are not comprehensive enough. Therefore, keep in mind of the following:\n ▫️[7.1] Use common sense and be mindful of what you send.\n ▫️[7.2] All server rules apply when Direct Messaging (DM) other members of the community.\n ▫️[7.3] All users should read each channel's 'channel topic' and must comply with any additional community guidelines via pinned messages.\n ▫️[7.4] Do not try to evade the filters or circumvent the rules and guidelines (i.e. loopholes).\n ▫️[7.5] Any and all content or behavior deemed detrimental to the server is not prohibited.")
        .setFooter("")

        message.channel.send(NewEmbed8)

        const NewEmbed9 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setTitle("Discord Terms and Conditions and Community Guidelines")
        .setDescription("This server follows Discord's [Terms of Service](https://discord.com/terms) (ToS) and [Community Guidelines](https://discord.com/guidelines):\n :white_small_square:[6.1] To be able to use Discord and be apart of our community, you must be at least 13 years old and abide by all other terms and guidelines.")
        .setFooter("")

        message.channel.send(NewEmbed9)

        const NewEmbed10 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setImage('https://cdn.discordapp.com/attachments/744558611186843767/788319548390637599/channels.png')
        .setFooter("")
        
        message.channel.send(NewEmbed10)

        const NewEmbed11 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setDescription("<#780728788031635458> This are the rules and regulations for our server \n ")
        .addFields(
            { name: '📄 Read only', value: '<#740884895643074581> This channel Welcomes all the users :) \n <#780709081228640256> This channel provides reaction game roles which unlocks its corresponding channels. \n <#780707423136514048> This channel provides video updates of Rogue Patrol and... ||I think my creator doesn`t like to add his name XD||. \n <#742984227422732302> this channel provides the information who all left the channel. \n <#781026298004897802> This channel has all the frequently asked questions by our users ||maybe by our users XD|| and we provided the answers with them.'},
            { name: "📢 News and Announcements", value: "<#740891390359371817> Updates and Information of Rogue Patrol Discord Server.\n <#787932914917834792> Updates and Information of our Bot.\n <#780687234978414632> Valorant News and Updates so that You will be up-to-date in Valorant. \n <#780690883493625888> Fall Guys News and updates so that You will be up-to-date in Fall Guys. \n <#780690917400903691> Fall Guys News and Updates in Bulletins so it will be so easy to read. \n <#786126295318265866> PUBG Mobile Global News and Updates so that you will be up-to-date In PUBG Mobile."},
            { name: "📢 Beta News and Announcements", value: "<#780691168085934081> Pubg Mobile Beta Updates and News so that you will get prior information before others. \n <#780691209840492544> PUBG Mobile BETA Patch notes ||with Images|| so that you will know how the next update changes the in-game Content. "},
            { name: "✉ Text Channel", value: "<#780817445702467595> Here you can introduce yourselves by telling your hobbies and other stuffs. If you don't like to post feel free to not post as it is compulsory to everyone :). \n <#780817683322765343> This the channel where everyone chat for fun or for to play games in group.\n <#780817709918715924> This is only for using bot-commands like rhythm's music command mee6's  lvl-up command and Our discord bot command|| want to know the commands?? use rp!cmd|| and much more. "},
            { name: "🛠 Support", value: "<#781026810195345439> If you have any queries or you need a person to support you, You can go to this channel and open a ticket!."},
            { name: "🤣 Memes", value:"<#741611421011279962> Here you can post memes or you can use a bot commands to see memes"},
            { name: "🔊 Voice", value: "<#781160090681999410> This voice channel is only for admins where they will take about how to improve this server. \n <#782202950013026336> This is a general Voice channel where anyone can come and speak with their discord friends. \n <#741615105405485077>, <#741615232035586099> These are Valorant voice channels to speak in the game. \n <#781160381024043018> , <#781160562335809577> These are PUBG Mobile voice channels to speak in the game. <#741615318941564928> This channel is for Fall guys to speak in the game."}

        

        )
        
        message.channel.send(NewEmbed11)

        const NewEmbed12 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setImage("https://cdn.discordapp.com/attachments/744558611186843767/788319561803497492/rules.png")

        message.channel.send(NewEmbed12)

        const NewEmbed13 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .addFields(
            { name: "Staff Roles",  value: "<@&742661794665070592> The server owner who is working really hard to make this server good ('Do not ping him'). \n <@&781159886560952392> The Admin Team who Makes some small changes in the server and makes the server perfect while the Owners are not here ('Do not Ping him'). \n <@&780397222394069013> They are the Moderation Team for this server they have some little permissions ||Maybe more Permissions|| than the <@&781159886560952392> Role. Their work also is same as admin but little. They maintain the server clean and perfect like admins. \n <@&780738032130326578> They are admins for the support ticket. They will help you when you need support. \n <@&780738031836856340> They are the support for the ticket admins ||maybe like a moderator||. They will also support you when you need help."},
            { name: "Content Creators Role",  value: "We did have only one for this that is only for this platform, \n <@&740872059198111814> The content Creators from this servers. Thia also unlock game voice channels."},
            { name: "Game roles", value: "These roles are given when they react to certain reactions on <#780709081228640256> channel.\n <@&780396452425236480> The Valorant role Unlocks Valorant game updates and voice channels. \n <@&780396619786485800> The Fallguys role Unlocks Fallguys Game updates and voice channels. \n <@&780822546605277234> The Pubg Mobile role unlocks Pubg mobile Game updates and beta game updates and patch notes and voice channels."},
            { name: "Bot roles", value: "There are two types of Bot roles they are, \n <@&740882901402386482> This is the common bot roles that every bot in the server has it. \n <@&782095350043246663> This is the Only role that the Self-made Roguepatrol bot will have because he is special ||:)|| "},
            { name: "Other roles", value:"<@&783688250681589800> This a role tell which guys support us before everyone does :). \n <@&742993885390700614> This is the Basic role for everyone to enter our server. \n <@&782109953712062495> This role indicates who are all muted and doesn't have permission to send messages in the server for a period of time || or a day also XD || " },
            { name: "Stats Roles", value: "<@&787933078990880798> This will tell about the updates of bot. If you react with the corresponding emoji at <#780709081228640256> channel, You will get the role. \n <@&787933799165460481> It will tell you about Server updates. If you react With corresponding emoji at <#780709081228640256> channel, You will get the role"}
        )
      
        message.channel.send(NewEmbed13)

        const NewEmbed14 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setImage("https://cdn.discordapp.com/attachments/744558611186843767/788319561803497492/rules.png")

        message.channel.send(NewEmbed14)

        const NewEmbed15 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .addFields(
            { name: "Links ",value:"<:Discord:788681179930034186> - [Discord](https://discord.gg/9Nc2JgsdcU) \n \n <:youtube:780794569302212609> - [Rogue Patrol](https://www.youtube.com/channel/UC4TdX2Yub424cwaHC42lO7A) \n \n <:youtube:780794569302212609> - [Lathesh Gaming](https://www.youtube.com/channel/UCQzT3F65q2GSNMzRD2K5Mdg) \n \n <:Instagram:788681232733044747> - [rogue_patrol](https://instagram.com/rogue_patrol?igshid=jc7a4zweqng2) \n \n <:Instagram:788681232733044747> - [lathesh_gaming](https://www.instagram.com/lathesh_gaming/) \n \n <:Twitter:788705474668920893> - [@GamingLathesh or Lathesh Gaming](https://twitter.com/GamingLathesh) "}
        )

        message.channel.send(NewEmbed15)

        const NewEmbed16 = new Discord.MessageEmbed()
        .setColor("#ffdc00")
        .setDescription("If you agree with the rules and regulations Please type rp!agree 1 to get into our server. Also make sure that the Bot Rogue Patrol is Online ||Because it is a humanoid bot and needs rest at Night time of GMT +5:30||. If it is not on Contact The Moderation Team to add you in the server")
    
        message.channel.send(NewEmbed16)    
    }




}

