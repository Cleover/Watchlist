module.exports = async (client, oldUser, newUser) => {
    if(newUser.bot) return;

    if(!client.checkUserWatchlist(newUser.id)) return;

    //get the difference between the old and new user
    let difference = Object.keys(oldUser).reduce((diff, key) => {
        if (oldUser[key] !== newUser[key]) {
            diff[key] = newUser[key];
        }
        return diff;
    }, {});

    console.log(diff)

    // client.output("User Updated", `Message created by a user with the newby role\nMessage:\n${message.content}`, 0x91e386, {User: message.author.id}, message.url);
}