module.exports = async (client, oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;

    if(!client.checkUserWatchlist(oldMessage.author.id)) return;

    if(message.channel.id == client.config.watchlist.blocked) {
        client.output(message.author, `\`[Message Blocked By AutoMod]\` [[Jump]](${message.url})\n${client.escape(message.embeds[0].description.split("\n").map(line => `> ${line}`).join("\n"))}`)
    }else if (message.channel.id == client.config.watchlist.warned) {
        client.output(message.author, `\`[Message Suspected By AutoMod]\` [[Jump]](${message.url})\n${client.escape(message.embeds[0].description.split("\n").map(line => `> ${line}`).join("\n"))}`)
    }else {
        if(!oldMessage.content) oldMessage.content = "No Content (Likely an image/embed)"
        if(!newMessage.content) newMessage.content = "No Content (Likely an image/embed)"
    
        const images = message.attachments.map(attachment => `<${attachment.url}>`) || []
    
        client.output(newMessage.author, `\`[Edited]\` [[Jump]](${newMessage.url})\n${client.escape(oldMessage.content.split("\n").map(line => `> ${line}`).join("\n"))}\n\n\`[Edited To]\`\n\n${client.escape(newMessage.content.split("\n").map(line => `> ${line}`).join("\n"))}\n${images.length > 0 ? "***Images:***\n" + images.join(", ") : ""}`)
    }
}