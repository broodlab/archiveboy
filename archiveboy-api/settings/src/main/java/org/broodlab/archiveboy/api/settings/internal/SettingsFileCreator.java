package org.broodlab.archiveboy.api.settings.internal;

import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.nio.file.Files.createFile;
import static org.broodlab.archiveboy.api.settings.internal.Defaults.SETTINGS_FILE_NAME;

@Component
class SettingsFileCreator {

    IBaseFolderPathProvider baseFolderPathProvider;

    SettingsFileCreator(IBaseFolderPathProvider baseFolderPathProvider) {
        this.baseFolderPathProvider = baseFolderPathProvider;
    }

    SettingsFile createSettingsFile() throws IOException {
        Path baseFolderPath = baseFolderPathProvider.provideBaseFolderPath();
        boolean fileIsNew = false;
        Path settingsFilePath = Paths.get(baseFolderPath.toString(), SETTINGS_FILE_NAME);
        if (!Files.exists(settingsFilePath)) {
            fileIsNew = true;
            createFile(settingsFilePath);
        }
        return new SettingsFile(fileIsNew, settingsFilePath);
    }
}
