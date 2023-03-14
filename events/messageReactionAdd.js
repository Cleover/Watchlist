module.exports = async (client, messageReaction, user) => {
    if(user.bot) return;

    if(!client.checkUserWatchlist(user.id)) return;

    client.output("Message Reacted On", `Message reacted on by a user with the newby role\nMessage Reacted To:\n${messageReaction.message.content}\nReaction:\n${messageReaction.emoji}`, 0x91e386, {User: user.id}, messageReaction.message.url);
}