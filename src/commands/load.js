exports.run = (client, message, args) => {
    if (!args || args.length < 1) return message.reply("Must provide a command name to load.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if (client.commands.has(commandName)) {
      return message.reply("That command is already loaded");
    }
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command .${commandName} has been loaded`);
  };
  
  exports.name = "load";
  exports.description = ".load {command}";