import {closeDbConnection, getDbConnection, initDbConnection} from "../../../main/db-connection";
import {expect} from "chai";

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
