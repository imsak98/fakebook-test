import { Request, Response } from "express"
import { IRejectRequestParams, InvitationStatus } from "../../helper/types"
import { dbclient } from "../../services/dbclient"

export const rejectRequest = async(req:Request, res: Response) => {
    const client = dbclient()
    const reqBody: IRejectRequestParams = req.body
    const acceptRequestQuery = `UPDATE friend_invitaions SET status = "${InvitationStatus.rejected}" WHERE id = "${reqBody.request_id}"`;
    client.query(acceptRequestQuery, (err, rows) => {
        if (err) return res.status(400).send(err);

        if(rows){
            return res.send({message: "Request has been rejected"})
        }
    })
}