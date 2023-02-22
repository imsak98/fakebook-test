import { NextFunction, Request, Response } from "express";

export const Auth = (req:Request, res:Response, next:NextFunction) => {
    console.log(req.headers.authorization);
    if(req.headers.authorization === 'Bearer test') next();
    else    res.status(401).send({error: "error"});
}