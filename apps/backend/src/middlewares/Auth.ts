import { NextFunction, Request, Response } from "express";
import { verifyJwtToken } from "../services/verifyJwtToken";

export const Auth = async (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization
    
    if(authHeader){
        const token = authHeader.split(' ')[1];
        // console.log(token);
        const {payload , protectedHeader, code:err} = await verifyJwtToken(token)
        if(err) return res.status(401).send({error: "Invalid token"})
        if(payload){
            req.body.user = payload.user
            next()
        }

    } else 
        return res.status(401).send({error: "Authorization header not found"});
}