/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { resgister } from './controllers/UserController';
import { Auth } from './middlewares/Auth';

const app = express();
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/register', resgister);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
