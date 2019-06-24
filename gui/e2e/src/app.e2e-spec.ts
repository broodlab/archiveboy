import {AppPage} from "./app.po";
import {browser, logging} from "protractor";
import {expect} from "chai";
import {beforeEach, describe, it} from "mocha";

describe("workspace-project App", () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it("should display welcome message", async () => {
        await page.navigateTo();
        expect(await page.getTitleText()).to.be.eq("Welcome to ArchiveBoy!");
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser
            .manage()
            .logs()
            .get(logging.Type.BROWSER);
        expect(logs).not.to.have.property("level", logging.Level.SEVERE);
    });
});
