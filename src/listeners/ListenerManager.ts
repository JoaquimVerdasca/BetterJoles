import { Client } from "discord.js";
import { Logger } from "../logging";

export class ListenerManager {
    public constructor(private client: Client) {}

    public register() {
        Logger.info("Registering listeners");
    }
}
