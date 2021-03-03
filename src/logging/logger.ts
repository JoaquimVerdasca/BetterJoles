import { createLogger, format, transports } from "winston";

const logFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

export const Logger = createLogger({
    format: logFormat,
    transports: [
        new transports.Console(),
        new transports.File({ filename: "betterjoles.log" }),
    ],
});
