exports.run = async (client, message, ...prompt) => {
    
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: client.config.openaikey,
    });
    const openai = new OpenAIApi(configuration);
    let question = "Paraphrase the following paragraph, " +
    "using as few words from the original paragraph as possible: "
     + prompt
    const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: question,
    temperature: 1,
    max_tokens: 3000,
    top_p: 1,
    best_of: 2,
    frequency_penalty: 2,
    presence_penalty: 1,
    });
    let natural = response.data.choices[0].text;

    await message.channel.send(natural).catch(console.error);
}

exports.name = "ai";
exports.description = ".rewrite {phrase}";