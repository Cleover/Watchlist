module.exports = async (client, messageReaction, user) => {
    if(user.bot) return;

    if(!client.checkUserWatchlist(user.id)) return;

    if(!messageReaction.message.content) messageReaction.message.content = "No Content (Likely an image/embed)"

    client.output(user, `\`[Reacted To]\` [[Jump]](${messageReaction.message.url})\n${client.escape(messageReaction.message.content.split("\n").map(line => `> ${line}`).join("\n"))}\n\`[With]\`\n> ${messageReaction.emoji}\n`)

}