exports.run = async (client, message, args) => {
    const { EmbedBuilder } = require('discord.js');

    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Commands')
    // andrew tate
	.setURL('https://www.youtube.com/watch?v=CrDgWkmBDmw');

    const command = client.commands.get(args[0]);
    if (command !== undefined) {
        embed.addFields(
            {
                name: command.name, value: command.description
            }
        );
    } else {
        for (const [commandName, cmd] of client.commands)
        {
            embed.addFields(
                {
                    name: commandName, value: cmd.description
                }
            );
        }
    }
    await message.channel.send( {embeds: [embed]});
}

exports.name = "help";
exports.description = "Sends the help message";