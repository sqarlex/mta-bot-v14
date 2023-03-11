const { Events } = require("discord.js");
const gamedig = require("gamedig");

module.exports = {
  name: Events.ClientReady,
  once: true,

  async execute(client, config) {
    console.log(`[BOT] ${client.user.tag} aktif.`);

    const server = config.server;

    const mtasa = await gamedig.query({
      type: "mtasa",
      host: server.ip,
      port: server.port,
    });

    setInterval(function playersUpdate() {
      client.user.setPresence({
        activities: [
          { name: `Sunucuda ${mtasa.raw.numplayers} aktif oyuncu var!` },
        ],
        status: "idle",
      });
    }, config.duration);
  },
};
