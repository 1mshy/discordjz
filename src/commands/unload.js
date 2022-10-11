exports.run = async (client, message, args) => {
  if (!args || args.length < 1) return await message.reply("Must provide a command name to load.");
  const commandName = args[0];

  const bootloader = require("../extra/bootloader.js");
  // Check if the command exists and is valid
  if (!client.commands.has(commandName)) {
    return await message.reply(`The command .${commandName} does not exist`);
  }

  bootloader.unload(client, commandName);
  await message.reply(`The command .${commandName} has been unloaded`);
  };
  
  exports.name = "unload";
  exports.description = ".unload {command}";