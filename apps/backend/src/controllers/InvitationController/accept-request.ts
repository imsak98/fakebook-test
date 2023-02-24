import { Request, Response } from "express"
import { IAcceptRequestParams, InvitationStatus } from "../../helper/types"
import { dbclient } from "../../services/dbclient"

export const acceptRequest = async(req:Request, res: Response) => {
    const client = dbclient()
    const reqBody: IAcceptRequestParams = req.body
    const user_id = req.body.user.id    //current logged in user's id
    const acceptRequestQuery = `UPDATE friend_invitaions SET status = "${InvitationStatus.accepted}" WHERE id = "${reqBody.request_id}"`;
    client.query(acceptRequestQuery, (err, rows) => {
        if (err) return res.status(400).send(err);

        if(rows){
            const addNewFriendQuery = `INSERT INTO user_friend (user_id, friend_id) VALUES (
                "${reqBody.requested_by_user_id}",
                "${user_id}"
            )`
            client.query(addNewFriendQuery, (err, rows) => {
                if (err) return res.status(400).send(err);
                
                if (rows) {
                    return res.send({message: "Request has been accepted"})
                }
            })
        }
    })
}