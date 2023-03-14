const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = (client) => {
  client.output = async (user, message) => {
    const channel = client.channels.cache.get(client.config.watchlist.output);

    let webhooks = await channel.fetchWebhooks();
    let webhook = webhooks.first();
    
    if (!webhook) {
      webhook = await channel.createWebhook({
        name: 'Watchlist Proxy',
        reason: 'Watchlist Proxy'
      });
    }

    await webhook.send({
      username: user.tag,
      avatarURL: user.avatarURL(),
      content: message,
    });
    
  };

  client.checkUserWatchlist = async (userID) => {
    const guild = client.guilds.cache.get(client.config.watchlist.guild);
    if (!guild)
      return console.log(
        `Can't find the guild with ID ${client.config.watchlist.guild}`
      );
    guild.members
      .fetch(userID)
      .then((member) => {
        if (member.roles.cache.has(client.config.watchlist.role)) hasRole = true;
        return hasRole;
      })
      .catch((err) => {
        return false
      });
  };

  client.escape = (text) => {
    var unescaped = text.replace(/\\(\*|_|`|~|\\)/g, '$1'); // unescape any "backslashed" character
    var escaped = unescaped.replace(/(\*|_|`|~|\\)/g, '\\$1'); // escape *, _, `, ~, \
    return escaped;
 }; 
};
