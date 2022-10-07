exports.run = async (client, message, _) => {
    const { EmbedBuilder } = require('discord.js');

    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Commands')
    // andrew tate
	.setURL('https://www.youtube.com/watch?v=CrDgWkmBDmw');

    for (const [commandName, cmd] of client.commands)
    {
        console.log(commandName);
        embed.addFields(
            {
                name: cmd.name, value: cmd.description
            }
        );
    }

    await message.channel.send( {embeds: [embed]});
    
}

exports.name = "ai";
exports.description = "Send the help message";