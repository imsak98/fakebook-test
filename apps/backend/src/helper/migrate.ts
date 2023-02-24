import { dbclient } from "../services/dbclient"
import * as fs from 'fs'
import * as path from 'path'

export const migrate = (req, res) => {
    const client = dbclient();
    const sqlFilePath = path.resolve('db/fakebookdb.sql');
    const sqlFile = fs.readFileSync(sqlFilePath,'utf-8')
    client.query(sqlFile, (err, result) => {
        if (err)    return res.status(400).send(err)

        if(result)  return res.send({message: "migrated success"})
    })
}