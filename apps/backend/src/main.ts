/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { acceptRequest, friendRequests, rejectRequest, sendFriendRequest } from './controllers/InvitationController';
import { getAllUsers, getAllUsersFriends, login, resgister } from './controllers/UserController';
import { migrate } from './helper/migrate';
import { Auth } from './middlewares/Auth';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/migrate', migrate); // RUN THIS FIRST TIME TO MIGRATE THE TABLES INTO THE DB

app.post('/register', resgister); // api for registraion
app.post('/login', login); // api for login
app.post('/getAllUsers', Auth, getAllUsers); // api for getting all the user. This will be called in getting all the users to send friend request
app.post('/friendRequests', Auth, friendRequests); // api for sending friend request to the user
app.post('/sendFriendRequest', Auth, sendFriendRequest); // api for sending friend request to the user
app.post('/acceptFriendRequest', Auth, acceptRequest); // api for accepting friend request to the user
app.post('/rejectFriendRequest', Auth, rejectRequest); // api for rejecting friend request to the user
app.post('/getAllUsersFriends', Auth, getAllUsersFriends); // api for rejecting friend request to the user


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
