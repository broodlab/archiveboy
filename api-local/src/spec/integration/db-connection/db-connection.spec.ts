import {expect} from "chai";
import {initDbConnection, getDbConnection, closeDbConnection} from "../../../main/db-connection";

describe("'db-connection' spec", () => {
    describe("The database connection", () => {
        it("can be established.", async () => {
            await initDbConnection();
            expect(getDbConnection().isConnected).to.be.true;
            await closeDbConnection();
        });

        it("can be closed.", async () => {
            await initDbConnection();
            await closeDbConnection();
            expect(getDbConnection().isConnected).to.be.false;
        });
    });
});
