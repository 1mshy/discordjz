const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
client.commands = new Collection();


const config = require("./config.json");
client.config = config;
client.commands = new Collection();
client.errors = new Collection();

// IMPORTANT readdir is different than require and "src" is needed before
const events = fs.readdirSync("./src//events").filter(file => file.endsWith(".js"));
for (const file of events)
{
    // removes .js extension
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    // each event will be called using client arguement followed by normal arguements
    client.on(eventName, event.bind(null, client));
}

// COMMANDS
const commands = fs.readdirSync("./src//commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
}
// ERRORS
const errors = fs.readdirSync("./src//errors").filter(file => file.endsWith(".js"));
for (const file of errors) {
  const errorName = file.split(".")[0];
  const error = require(`./errors/${file}`);

  console.log(`Attempting to load error ${errorName}`);
  client.errors.set(errorName, error);
}


client.login(client.config.token);
client.on("ready", () => {
    client.user.setActivity(`active on ${client.guilds.cache.size} servers`);
    console.log(`Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`);
  });