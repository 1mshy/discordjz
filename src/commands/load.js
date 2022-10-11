exports.run = async (client, message, args) => {
  if (!args || args.length < 1) return await message.reply("Must provide a command name to load.");
  const commandName = args[0];
  const bootloader = require("../extra/bootloader.js");
  // Check if the command exists and is valid
  if (client.commands.has(commandName)) {
    return await message.reply("That command is already loaded");
  }
  const fs = require("fs");
  if (!fs.existsSync(`./src//commands//${commandName}.js`)) {
    return await message.reply(`The command .${commandName} does not exist`);
  }

  bootloader.load(client, commandName);
  await message.reply(`The command .${commandName} has been loaded`);
};

  exports.name = "load";
  exports.description = ".load {command}";