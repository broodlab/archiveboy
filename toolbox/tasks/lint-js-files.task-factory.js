const eslint = require("gulp-eslint");
const log = require("fancy-log");
const {noop} = require("gulp-util");
const {src} = require("gulp");

const createLintJsFilesTask = (moduleName, failAfterError) =>
    function lintJsFiles() {
        const fix = process.env.npm_config_fix;
        log(`${moduleName}: Linting JavaScript files.`);
        return src(["**/*.js", "!dist/**", "!node_modules/**"])
            .pipe(
                eslint({
                    configFile: "eslint-js.config.js",
                    fix
                })
            )
            .pipe(eslint.format())
            .pipe(failAfterError ? eslint.failAfterError() : noop());
    };

exports.createLintJsFilesTask = createLintJsFilesTask;
