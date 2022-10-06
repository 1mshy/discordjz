exports.run = async (client, message, args) => {
    await message.channel.send("Command not found").catch(console.error);
}

exports.name = "commandNotFound";