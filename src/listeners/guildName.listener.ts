import { Client } from "discord.js";

const GUILD_NAME = "simp club (simps only) - big simping time";

export function guildName(client: Client): void {
    client.on("guildUpdate", async (_, newGuild) => {
        if (newGuild.name !== GUILD_NAME) {
            await newGuild.setName(GUILD_NAME);
        }
    });
}
