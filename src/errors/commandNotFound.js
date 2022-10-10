exports.run = async (client, message, args) => {
    // when users input something like ..., it won't flag it as a wrong command
    if(message.content[1]=='.') return;
    await message.channel.send("Command not found").catch(console.error);
}

exports.name = "commandNotFound";
exports.description = "Run when user requested command does not exist";