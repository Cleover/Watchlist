const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = (client) => {
  client.output = (reason, details, color, ids, jump = false) => {
    const channel = client.channels.cache.get(client.config.watchlist.output);
    const embed = new EmbedBuilder()
      .setTitle(reason)
      .setColor(color)
      .setDescription(
        `**Details:**\`\`\`${details}\`\`\`\nIDs:\`\`\`${Object.entries(ids)
          .map(([key, value]) => `${key} = ${value}`)
          .join("\n")}\`\`\``
      )
      .setTimestamp()
      .setFooter({
        text: `Watchlist | ${client.user.username}`,
        iconUrl: client.user.avatarURL(),
      });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("messageLink")
        .setLabel("Jump to Message")
        .setStyle(ButtonStyle.Link)
        .setDisabled(!jump)
        .setURL(jump)
    );

    channel.send({
      embeds: [embed],
      components: [row],
    });
  };

  client.checkUserWatchlist = (userID) => {
    const guild = client.guilds.cache.get(client.config.watchlist.guild);
    if (!guild)
      return console.log(
        `Can't find the guild with ID ${client.config.watchlist.guild}`
      );
    guild.members
      .fetch(userID)
      .then((member) => {
        if (member.roles.cache.has(client.config.watchlist.role)) return true;
      })
      .catch(console.error);
    return false;
  };
};
