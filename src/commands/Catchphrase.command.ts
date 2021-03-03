import { Command } from "./Command";

export class CatchphraseCommand extends Command {
    public async execute(): Promise<void> {
        await this.message.channel.send("You're the best!");
    }

    public canExecute(): boolean {
        return true;
    }
}
