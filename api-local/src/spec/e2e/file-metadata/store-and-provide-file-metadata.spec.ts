import {IFileMetadata} from "@archiveboy/api";
import {api} from "../../../main/api";
import {expect} from "chai";

describe("'store-file-metadata' and 'provide-file-metadata' spec", () => {
    const fileMetadata: IFileMetadata = [{path: "foo"}, {path: "bar"}];

    before(async () => {
        await api.init();
    });

    after(async () => {
        await api.clearFileMetadata();
        await api.destroy();
    });

    it("stores", async () => {
        await api.storeFileMetadata(fileMetadata);
        expect(await api.provideFileMetadata()).to.be.deep.equals(fileMetadata);
    });
});
