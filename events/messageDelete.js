module.exports = async (client, message) => {
    if(message.author.bot) return;

    if(!client.checkUserWatchlist(message.author.id)) return;

    if(!message.content) message.content = "No Content (Likely an image/embed)"

    const images = message.attachments.map(attachment => `<${attachment.url}>`) || []

    client.output(message.author, `\`[Deleted]\`\n>>> ${client.escape(message.content.split("\n").map(line => `> ${line}`).join("\n"))}\n${images.length > 0 ? "***Images:***\n" + images.join(", ") : ""}`)
}