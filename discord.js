//importing all necessary modules
const http = require('http');
const express = require('express');
const app = express();
const musicModule = require('./modules/musicModule.js');
const server = require('http').createServer(app);

app.get("/", (request, response) => {
	console.log(Date.now() + " Ping Received");
	response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});

require('dotenv').config();
//require discord node module
const Discord = require('discord.js');
//new instance of discord client
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

//call login method passing in our token
bot.login(TOKEN);

//sets status
client.once('ready', () => {
	console.log('Pikachu?');
	client.user.setStatus("do not disturb");
	client.user.setActivity("with 美學");
});

//responses to messages
client.on('message', message => {
	if (message.content === 'Pika!') {
		message.channel.send('>:(');
	}
});

//commands
client.on('message', message => {
	//I should really use a switch lmao
	const command = message.content.toLowerCase();
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	//ping : pings bot
	if (command === (config.prefix + 'ping')) {
		message.channel.send('Hullo');
	}
	//avatar : gets avatar
	if (message.content.startsWith(config.prefix + 'avatar')) {
		//grabs user by message mention or message author
		const user = message.mentions.users.first() || message.author;
		//new Discord.RichEmbed object
		const avatarEmbed = new Discord.RichEmbed()
			.setColor(0x333333)
			//access various user object properties
			.setAuthor(user.username)
			.setImage(user.avatarURL);
		//send embedded object
		message.channel.send(avatarEmbed);
	}
	//kick: kick user
	if(command === "kick") {
		let member = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		member.kick(reason);
	  }

});