import { Request, Response } from "express";
import { dbclient } from "../../services/dbclient";

export const friendRequests = async (req:Request, res:Response) => {
    const client = dbclient();
    const user_id = req.body.user.id  // current logged in user id from auth token
    const getAllFreindRequestQuery = `SELECT friend_invitaions.id as request_id, 
    users.id as user_id, 
    friend_invitaions.status as request_status, 
    users.name, 
    users.display_name, 
    users.email, 
    users.contact_no, 
    friend_invitaions.created_at as requested_at
    FROM friend_invitaions
    JOIN users on users.id = friend_invitaions.user_id 
    WHERE friend_invitaions.friend_id = "${user_id}";`
    client.query(getAllFreindRequestQuery, (err, rows) => {
        if (err) return res.status(400).send(err);

        if(rows){
            const friendRequestList = rows
            return res.send({requestsList: friendRequestList});
        }
    })
}