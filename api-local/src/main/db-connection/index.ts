import {FileEntity, TestEntity} from "../entities";
import {Connection, ConnectionOptions, createConnection} from "typeorm";

const dbConnectionOptions: ConnectionOptions = {
    database: "database.sqlite",
    entities: [FileEntity, TestEntity],
    logging: false,
    synchronize: true,
    type: "sqlite"
};
let dbConnection: Connection;
let dbConnectionEstablished: boolean = false;

export const initDbConnection = async () => {
    if (dbConnectionEstablished) {
        return;
    }

    dbConnection = await createConnection(dbConnectionOptions);
    dbConnectionEstablished = true;
};

export const getDbConnection = (): Connection => {
    if (!dbConnection) {
        throw new Error("Database connection not established, yet.");
    }
    return dbConnection;
};

export const closeDbConnection = async () => {
    await getDbConnection().close();
    dbConnectionEstablished = false;
};
