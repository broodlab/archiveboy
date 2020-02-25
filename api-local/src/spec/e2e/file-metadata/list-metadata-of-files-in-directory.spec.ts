import {api} from "../../../main/api";
import {expect} from "chai";
import {promises} from "fs";
import {resolve} from "path";

describe("'list-metadata-of-files-in-directory' spec", () => {
    const testee = api.listMetadataOfFilesInDirectory;
    const twoFilesDirectoryPath = resolve(__dirname, "directories");

    before(async () => {
        await promises.mkdir(twoFilesDirectoryPath);
        await promises.writeFile(twoFilesDirectoryPath + "/one.png", "");
        await promises.writeFile(twoFilesDirectoryPath + "/two.png", "");
    });

    it("Provides a list of file metadata contained in a certain directory.", async () => {
        expect(await testee(twoFilesDirectoryPath)).to.be.lengthOf(2);
    });
});
