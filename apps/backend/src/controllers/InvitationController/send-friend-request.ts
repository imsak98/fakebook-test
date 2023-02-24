import { Request, Response } from "express";
import { ISendFriendRequestParams } from "../../helper/types";
import { dbclient } from "../../services/dbclient";
import {v4 as uuid} from 'uuid'

export const sendFriendRequest = async(req:Request,res:Response) => {
    const client = dbclient();
    const reqBody: ISendFriendRequestParams = req.body  // this will have the user id of the user we have to send the request
    const user_id = req.body.user.id    // this will be the current user id whose perfomring the task

    const request_id = uuid();
    const createInvitationRequestQuery = `INSERT INTO friend_invitaions (id, user_id, friend_id) VALUES (
        "${request_id}",
        "${user_id}",
        "${reqBody.user_id}"
    );`;
    client.query(createInvitationRequestQuery, (err, rows) => {
        if (err) return res.status(400).send(err);

        if(rows){
            console.log(rows)
            return res.send({message: "Friend request has been send", request_id: request_id});
        }
    })
}