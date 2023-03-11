const {
  ChannelType,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  PermissionsBitField,
  Events,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");
const fs = require("fs");
const wait = require("node:timers/promises").setTimeout;


module.exports = {
  name: Events.InteractionCreate,
  once: false,

  async execute(client, config, interaction) {
    const { user, channel, guild } = interaction;

    if (interaction.isChatInputCommand()) {
      if (!interaction.guild) return;

      for (let props of fs.readdirSync("./commands")) {
        const command = require(`../commands/${props}`);

        if (
          interaction.commandName.toLowerCase() === command.name.toLowerCase()
        ) {
          return command.execute(client, interaction, config);
        }
      }
    }
  },
};
