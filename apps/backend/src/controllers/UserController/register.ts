import { Request, Response } from "express";
import { dbclient } from "../../services/dbclient";

export const resgister = (req:Request, res:Response) => {

    const client = dbclient();
    // console.log(client)
    client.query('SELECT * FROM users', (err, rows, fields) => {
        // console.log('fileds',fields);
    });

    return res.send({test:"test"});
}