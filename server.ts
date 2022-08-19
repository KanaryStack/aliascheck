import express, { Express, Request, Response } from 'express';
import { createLogger, transports, format } from "winston";
import apiRoute from './server/routes/Api'
import * as dotenv from 'dotenv';

dotenv.config();
const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
});
const app: Express = express();
const port = process.env.PORT;
app.use('/', apiRoute);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${port}`);
});