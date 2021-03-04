import { Command } from "./Command";
import _ from "underscore";

export class CatchphraseCommand extends Command {
    private PHRASES = [
        "./assets/voice/catchphrase.mp3",
        "./assets/voice/catchphraseportugues.mp3"
    ];

    public async execute(): Promise<void> {
        await this.message.channel.send("You're the best!");

        if (this.message.member?.voice.channel) {
            const voiceConnection = await this.message.member.voice.channel.join();
            const dispatcher = voiceConnection.play(_.sample(this.PHRASES)!, {
                volume: 1
            });

            dispatcher.on("finish", () => {
                voiceConnection.disconnect();
            });
        }
    }

    public canExecute(): boolean {
        return true;
    }
}
