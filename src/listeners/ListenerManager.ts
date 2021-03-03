import { Client } from "discord.js";
import { guildName } from "./guildName.listener";
import { Logger } from "../logging";

export class ListenerManager {
    public constructor(private client: Client) {}

    public register() {
        Logger.info("Registering listeners");
        guildName(this.client);
    }
}
