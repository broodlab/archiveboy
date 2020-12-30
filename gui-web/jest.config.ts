import "jest-preset-angular";

const config = {
    preset: "jest-preset-angular",
    moduleNameMapper: {
        "@archiveboy/gui-web/(.*)": "<rootDir>/src/main//$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.config.ts"],
};

export default config;
