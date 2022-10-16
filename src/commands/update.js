exports.run = async (client, message, args) => {
    const execSync = require('child_process').execSync;
    
    const updateInfo = execSync('git remote update', { encoding: 'utf-8' });  // the default is 'buffer'
    const status = execSync('git status -uno', { encoding: 'utf-8' });
    let stats = status.split("\n")[1].split(" ")[3];
    // up: up to date
    // behind: needs to update
    console.log(stats)
    if(stats!=="behind") return;
    const merge = execSync('git pull origin master', { encoding: 'utf-8' });
    // getting the files that were updated
    let arr = merge.split("\n");

    let index = arr.indexOf("Fast-forward") + 1;
    let isCommand = true;
    let reload = require("../commands/reload.js");
    while(isCommand)
    {
        // gets the name of the command
        //Ex. src/commands/update.js | 7++++++ -> update.js
        console.log(index)
        console.log(arr);

        let commandName = arr[index].split("/")[2].split("|")[0].trim().split(".")[0];
        console.log(commandName);
        await reload.run(client, message, [commandName,]);

        index++;
        isCommand = arr[index].split("/")[0]=="src";
    }
    await message.reply("Update completed.").catch(console.error);
}

exports.name = "update";
exports.description = "Will update the client if possible";