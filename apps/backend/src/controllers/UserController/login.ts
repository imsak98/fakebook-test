import { Request, Response } from 'express';
import { ILoginRequestParams, IUserObjectDB } from '../../helper/types';
import { dbclient } from '../../services/dbclient';
import * as bcrypt from 'bcryptjs'
import { createJwtToken } from '../../services/createJwtToken';

export const login = async (req: Request, res: Response) => {
  const client = dbclient();
  // console.log('req', req);
  const { email, password }: ILoginRequestParams = req.body;

  const getUserQuery = `SELECT * FROM users WHERE email = "${email}";`;
  client.query(getUserQuery, async (err, rows) => {
    if (err) return res.status(400).send();

    if (rows) {
      if(Object.keys(rows).length === 0){
        return res.status(404).send({message:'email is not registerd'}) //check if the rows are empty
      } else {
        // if we get the user object
        const user:IUserObjectDB = rows[0];
        if(bcrypt.compareSync(password, user.password)) { // check if the passwords matches or not
          console.log(user)
          const jwt = await createJwtToken({user})
          return res.status(200).send({ message:"Login success", token:jwt, user:user});
        } else {
          return res.status(401).send({ message: "password is incorrect"})
        }
      }


    }
  });
};
