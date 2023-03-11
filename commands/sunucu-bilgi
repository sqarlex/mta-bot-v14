const { EmbedBuilder, Colors } = require("discord.js");
const gamedig = require("gamedig");

module.exports = {
  name: "sunucu",
  description: "Sunucu bilgilerini gösterir.",
  options: [
    {
      type: 1,
      name: "bilgi",
      description: "Sunucu bilgilerini gösterir.",
    },
  ],

  async execute(client, interaction, config, db) {
    await interaction.deferReply();

    const { user, options } = interaction;
    const server = config.server;

    const mtasa = await gamedig.query({
      type: "mtasa",
      host: server.ip,
      port: server.port,
    });

    const embed = new EmbedBuilder()
      .setColor(config.color || 777)
      .setAuthor({ name: `${mtasa.name}` })
      .addFields([
        {
          name: "Harita:",
          value: "```" + mtasa.map + "```",
          inline: true,
        },
        {
          name: "Oyun tipi:",
          value: "```" + mtasa.raw.gametype + "```",
          inline: true,
        },
        {
          name: "Oyuncular:",
          value: "```" + mtasa.raw.numplayers + "/" + mtasa.maxplayers + "```",
          inline: true,
        },
        {
          name: "Ping:",
          value: "```" + mtasa.ping + "ms```",
          inline: true,
        },
        {
          name: "IP:",
          value: "```" + mtasa.connect + "```",
          inline: true,
        },
      ])
      .setTimestamp()
      .setFooter({
        text: `${user.tag} tarafından istendi.`,
        iconURL: `${user.displayAvatarURL()} `,
      });

    interaction.followUp({ embeds: [embed] });
  },
};
