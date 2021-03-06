import { Client, Message } from "discord.js";
import { Command } from "./Command";
import { CommandType } from "./CommandType";
import { CatchphraseCommand } from "./Catchphrase.command";
import { SnoreCommand } from "./Snore.command";

export class CommandManager {
    constructor(private client: Client, private prefix: string) {}

    public createCommand(message: Message): Command | null {
        const [keyword, args] = this.parseCommand(message.content);

        switch (keyword) {
            case CommandType.catchphrase:
                return new CatchphraseCommand(message, args);
            case CommandType.snore:
                return new SnoreCommand(message, args);
            default:
                return null;
        }
    }

    private parseCommand(messageContent: string): [CommandType, string[]] {
        const args = messageContent
            .slice(this.prefix.length)
            .trim()
            .split(/ +/g);
        const keyword = args.shift()?.toLowerCase() ?? "";
        const commandType =
            CommandType[keyword as keyof typeof CommandType] ?? null;

        return [commandType, args];
    }
}
