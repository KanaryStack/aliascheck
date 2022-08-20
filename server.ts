import {logger, app} from './server/app';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${port}`);
});

module.exports = app;