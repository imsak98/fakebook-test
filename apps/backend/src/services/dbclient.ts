import * as MySql from 'mysql';

export const dbclient = () => {
    const config = {
        dbHost: process.env['DB_HOST'],
        dbRootUser: process.env['DB_ROOT_USER'],
        dbRootUserPassword: process.env['DB_ROOT_USER_PASSWORD'],
        dbDatabaseName: process.env['DB_DATABASE_NAME'],
    }
    const connection = MySql.createConnection({
        host: config.dbHost,
        // port: 3306,
        user: config.dbRootUser,
        password: config.dbRootUserPassword,
        database: config.dbDatabaseName,
        multipleStatements: true
    });

    connection.connect();
    return connection;
}