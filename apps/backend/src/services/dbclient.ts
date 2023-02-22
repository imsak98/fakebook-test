import * as MySql from 'mysql';

export const dbclient = () => {
    const connection = MySql.createConnection({
        host: 'localhost',
        // port: 3306,
        user: 'root',
        password: 'rootuserpassword',
        database: 'fakebookdb'
    });

    connection.connect();
    return connection;
}