import { Client, Message } from "discord.js";
import { Logger } from "./logging";
import { CommandManager } from "./commands";
import { ListenerManager } from "./listeners";

class DiscordBot {
    private client = new Client();
    private prefix = "!joles";
    private commandManager = new CommandManager(this.client, this.prefix);
    private listenerManager = new ListenerManager(this.client);

    public constructor() {
        this.initializeClient();
    }

    public connect(): void {
        this.client
            .login(process.env.BOT_TOKEN)
            .then((_) => Logger.info("Connected to Discord"))
            .catch((error) =>
                Logger.error(
                    `Could not connect to Discord. Error: ${error.message}`
                )
            );
    }

    private initializeClient(): void {
        this.setReadyHandler();
        this.setMessageHandler();

        // Register listeners to other events
        this.listenerManager.register();
    }

    private setReadyHandler(): void {
        this.client.on("ready", () => {
            Logger.info(`Logged in as ${this.client.user?.tag}!`);
        });
    }

    private setMessageHandler(): void {
        this.client.on("message", async (message: Message) => {
            if (message.author.bot) return;
            if (message.content.indexOf(this.prefix) !== 0) return;

            const command = this.commandManager.createCommand(message);
            await command?.do();
        });
    }
}

export const BetterJoles = new DiscordBot();
