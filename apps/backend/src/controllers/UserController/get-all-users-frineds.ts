import { Request, Response } from 'express';
import { IUserObject } from '../../helper/types';
import { dbclient } from '../../services/dbclient';

export const getAllUsersFriends = async (req: Request, res: Response) => {
    const client = dbclient()
    const current_user_id = req.body.user.id // this is the current logged in user's id

    const getAllUsersFriendsQuery = `SELECT u.id, u.name, u.display_name, u.email, u.contact_no, uf.created_at 
    FROM users u 
    JOIN user_friend uf ON u.id = uf.friend_id 
    WHERE uf.user_id = "${current_user_id}"`;

    client.query(getAllUsersFriendsQuery, (err ,rows) => {
        if (err) return res.status(400).send(err);

        if(rows) {
            // console.log(rows)
            const friendsList: IUserObject[] = rows as Array<IUserObject>
            return res.send({
                friendsList: friendsList
            })
        }

    })

}