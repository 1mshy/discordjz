exports.run = async (client, message, ...prompt) => {
    const ai = require("../extra/aiResponse.js")
    let res = await ai.run(prompt)
    await message.reply(res)
}

exports.name = "ai";
exports.description = ".ai {phrase}";