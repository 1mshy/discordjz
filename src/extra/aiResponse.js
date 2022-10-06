// takes in client to use the key
exports.run = async (prompt) => {
    const { Configuration, OpenAIApi } = require("openai");
    const config = require("../config.json")
    const configuration = new Configuration({
    apiKey: config.openaikey,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 2000,
    top_p: 1,
    best_of: 1,
    frequency_penalty: 1,
    presence_penalty: 0.2,
    });

    // response is found in data.choices[0].text
    res = response.data.choices[0].text;

    if(res.length > 1999)
        res = res.slice(0,1999)
    return res;
}