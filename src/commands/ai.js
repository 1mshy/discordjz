exports.run = async (client, message, ...prompt) => {
    const ai = require("../extra/aiResponse.js")
    let res = await ai.run(prompt)
    await message.channel.send(res)
}

exports.name = "ai";