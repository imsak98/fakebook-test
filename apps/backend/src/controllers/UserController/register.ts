import { Request, Response } from "express";
import { IRegsitrationRequestParams } from "../../helper/types";
import { dbclient } from "../../services/dbclient";

export const resgister = (req:Request, res:Response) => {

    const client = dbclient()
    const { name, contact_no, display_name, email }: IRegsitrationRequestParams = req.body
    
    console.log(name)
    client.query('', (err, rows, fields) => {
        // console.log('fileds',fields)
    });

    return res.send({test:"test"});
}