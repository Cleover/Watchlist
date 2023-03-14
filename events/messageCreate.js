module.exports = async (client, message) => {
    if(message.author.bot) return;
    if(!client.checkUserWatchlist(message.author.id)) return;

    if(message.channel.id == client.config.watchlist.blocked) {
        client.output(message.author, `\`[Message Blocked By AutoMod]\` [[Jump]](${message.url})\n${client.escape(message.embeds[0].description.split("\n").map(line => `> ${line}`).join("\n"))}`)
    }else if (message.channel.id == client.config.watchlist.warned) {
        client.output(message.author, `\`[Message Suspected By AutoMod]\` [[Jump]](${message.url})\n${client.escape(message.embeds[0].description.split("\n").map(line => `> ${line}`).join("\n"))}`)
    }else {
        if(!message.content) message.content = "No Content (Likely an image/embed)"
    
        const images = message.attachments.map(attachment => `<${attachment.url}>`) || []
    
        client.output(message.author, `\`[Sent]\` [[Jump]](${message.url})\n${client.escape(message.content.split("\n").map(line => `> ${line}`).join("\n"))}\n${images.length > 0 ? "***Images:***\n" + images.join(", ") : ""}`)
    }


}