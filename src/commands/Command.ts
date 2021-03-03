import { Client, Message } from "discord.js";

export abstract class Command {
    constructor(protected message: Message, protected args: string[]) {}

    public async do(): Promise<void> {
        if (this.canExecute() === true) {
            await this.execute();
        }
    }

    protected abstract execute(): Promise<void>;
    protected abstract canExecute(): boolean;
}
