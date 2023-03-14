module.exports = async (client, message) => {
    if(message.author.bot) return;

    if(!client.checkUserWatchlist(message.author.id)) return;

    client.output("Message Deleted", `Message deleted by a user with the newby role\nMessage:\n${message.content}`, 0xa83232, {User: message.author.id});
}