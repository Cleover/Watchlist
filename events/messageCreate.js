module.exports = async (client, message) => {
    if(message.author.bot) return;

    if(!client.checkUserWatchlist(message.author.id)) return;

    console.log("hit")

    client.output("Message Created", `Message created by a user with the newby role\nMessage:\n${message.content}`, 0x91e386, {User: message.author.id}, message.url);
}