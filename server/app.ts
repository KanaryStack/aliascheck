import express, { Express } from 'express';
import { createLogger, transports, format } from "winston";
import routeApi from './routes/Api';

export const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
});
export const app: Express = express();
app.use('/', routeApi);

// app.listen(port, () => {
//   logger.info(`⚡️[server]: Server is running at https://localhost:${port}`);
// });

export default app;