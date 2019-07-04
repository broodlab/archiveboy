const headless = process.env.npm_config_headless;

const chromeOptions = {};
if (headless === "true") {
    chromeOptions.args = ["--headless", "--disable-gpu", "--window-size=800,600"];
}

exports.config = {
    allScriptsTimeout: 11000,
    specs: ["./src/**/*.e2e-spec.ts"],
    capabilities: {
        browserName: "chrome",
        chromeOptions
    },
    directConnect: true,
    baseUrl: "http://localhost:4200/",
    framework: "mocha",
    onPrepare() {
        require("ts-node").register({
            project: require("path").join(__dirname, "../tsconfig.spec.json")
        });
    }
};
