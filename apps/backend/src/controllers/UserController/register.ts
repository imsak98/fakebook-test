import { Request, Response } from 'express';
import { IRegsitrationRequestParams, IUserObject } from '../../helper/types';
import { dbclient } from '../../services/dbclient';
import * as bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';

export const resgister = async (req: Request, res: Response) => {
  const client = dbclient();
  const {
    name,
    contact_no,
    display_name,
    email,
    password,
  }: IRegsitrationRequestParams = req.body;
  const salt = bcrypt.genSaltSync(10);
  const user_id = uuid();
  const password_hash = bcrypt.hashSync(password, salt);
  const sql_query = `INSERT INTO users (id, name, display_name, email, password, contact_no) 
                        VALUES (
                            "${user_id}",
                            "${name}",
                            "${display_name}",
                            "${email}",
                            "${password_hash}",
                            "${contact_no}" );`;

  client.query(sql_query, (err, rows, fields) => {
    console.log('err', err);
    if (err) return res.status(400).send(err);

    if (rows.affectedRows > 0) {
      console.log('rows', rows);
      const user: IUserObject = {
        id: user_id,
        active: true,
        contact_no: contact_no,
        created_at: Date.now().toString(),
        display_name: display_name,
        email: email,
      };
      return res.status(200).send({
        message: 'user has been registered! Please login again to continue',
        user: user,
      });
    }
  });
};
