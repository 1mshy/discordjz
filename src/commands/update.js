exports.run = async (client, message, args) => {

    await message.channel.send("didn't work!").catch(console.error);
}

exports.name = "update";
exports.description = "Will update the client if possible";