exports.run = async (client, message, ...prompt) => {
    prom = prompt.join(" ")
    const ai = require("../extra/aiResponse.js");
    let res = await ai.edit(prom);
    await message.reply(res);
}

exports.name = "correct";
exports.description = ".correct {phrase}";