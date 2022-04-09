const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "ODk2MjYyOTI1NzUxMjg3ODI4.YWEj5Q.N7JhZuvBGoe44nhWSgg90LZ1YeU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "Visual"){
        message.reply("How are you doing today?")
    }
})


client.login(process.env.TOKEN)