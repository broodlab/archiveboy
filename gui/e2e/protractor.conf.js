exports.config = {
    allScriptsTimeout: 11000,
    specs: ["./src/**/*.e2e-spec.ts"],
    capabilities: {
        browserName: "chrome"
    },
    directConnect: true,
    baseUrl: "http://localhost:4200/",
    framework: "mocha",
    onPrepare() {
        require("ts-node").register({
            project: require("path").join(__dirname, "./tsconfig.json")
        });
    }
};
