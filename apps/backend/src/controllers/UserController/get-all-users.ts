import { Request, Response } from 'express';
import { IUserObject } from '../../helper/types';
import { dbclient } from '../../services/dbclient';

export const getAllUsers = async (req: Request, res: Response) => {
    const current_user_id = req.body.user.id
    console.log(current_user_id)
    const client = dbclient();
    const getAllUsersQuery = `SELECT id,name,display_name,email,contact_no,created_at FROM users WHERE id != "${current_user_id}" AND active = 1`;
    client.query(getAllUsersQuery, (err, rows) => {
        if (err) return res.status(400).send(err);

        if(rows) {
            const users: IUserObject[] = rows as Array<IUserObject>
            // console.log(users)
            return res.send({users: users});
        }
    });
};
