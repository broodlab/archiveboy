const eslint = require("gulp-eslint");
const log = require("fancy-log");
const {noop} = require("gulp-util");
const {src} = require("gulp");

const createLintTsFilesTask = (moduleName, failAfterError) =>
    function lintTsFiles() {
        const fix = process.env.npm_config_fix;
        log(`${moduleName}: Linting TypeScript files.`);
        return src(["**/*.ts", "!dist/**", "!node_modules/**"])
            .pipe(
                eslint({
                    configFile: "eslint-ts.config.js",
                    fix,
                })
            )
            .pipe(eslint.format())
            .pipe(failAfterError ? eslint.failAfterError() : noop());
    };

exports.createLintTsFilesTask = createLintTsFilesTask;
