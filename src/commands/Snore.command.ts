import { Command } from "./Command";
import _ from "lodash";

export class SnoreCommand extends Command {
    public async execute(): Promise<void> {
        if (this.message.member?.voice.channel) {
            const voiceConnection = await this.message.member.voice.channel.join();
            const dispatcher = voiceConnection.play(
                "./assets/voice/snore.mp3",
                {
                    volume: 1
                }
            );

            dispatcher.on("finish", () => {
                voiceConnection.disconnect();
            });
        }
    }

    public canExecute(): boolean {
        return true;
    }
}
