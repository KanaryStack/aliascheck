import {logger, app} from './app';
import * as dotenv from 'dotenv';

dotenv.config();
const port: string | undefined = process.env.PORT;
app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${port}`);
});

module.exports = app;