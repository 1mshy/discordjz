exports.run = async (client, message, ...prompt) => {
    prom = prompt.join(" ")
    const ai = require("../extra/aiResponse.js");
    let res = await ai.run(prom);
    await message.reply(res);
}

exports.name = "ai";
exports.description = ".ai {phrase}";