module.exports = async (client, oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;

    if(!client.checkUserWatchlist(oldMessage.author.id)) return;

    client.output("Message Updated", `Message updated by a user with the newby role\nOld Message:\n${oldMessage.content}\nNew Message:\n${newMessage.content}`, 0xb38a34, {User: oldMessage.author.id}, newMessage.url);
}