exports.load = async (client, commandName) => {
    const props = require(`../commands/${commandName}`);
    client.commands.set(commandName, props);

}
exports.unload = async (client, commandName) => {
    delete require.cache[require.resolve(`../commands/${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
}
exports.reload = async (client, commandName) => {
    await this.unload(client, commandName);
    await this.load(client, commandName);
}