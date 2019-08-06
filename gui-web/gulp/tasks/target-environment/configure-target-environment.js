const configFile = "node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js";
const fs = require("fs");

const configureTargetEnvironment = target => {
    const configFileContent = fs.readFileSync(configFile, "utf8");

    let newConfigFileContent = configFileContent.replace(/target: "electron-renderer",/g, "");
    newConfigFileContent = newConfigFileContent.replace(/target: "web",/g, "");
    newConfigFileContent = newConfigFileContent.replace(/return \{/g, `return {target: "${target}",`);

    fs.writeFileSync(configFile, newConfigFileContent, "utf8");
};

exports.configureTargetEnvironment = configureTargetEnvironment;
