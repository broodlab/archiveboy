package org.broodlab.archiveboy.api.settings.internal;

import org.broodlab.archiveboy.api.settings.ISettingsService;
import org.springframework.stereotype.Component;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Properties;

import static org.broodlab.archiveboy.api.settings.internal.Defaults.WORKSPACE_FOLDER_NAME;
import static org.broodlab.archiveboy.api.settings.internal.Defaults.WORKSPACE_PATH__SETTING_NAME;

@Component
public class SettingsFileService implements ISettingsService {

    private SettingsFileCreator settingsFileCreator;

    private Properties settings;

    public SettingsFileService(SettingsFileCreator settingsFileCreator) {
        this.settingsFileCreator = settingsFileCreator;
    }

    public void init() {
        try {
            SettingsFile settingsFile = settingsFileCreator.createSettingsFile();
            if (settingsFile.fileIsNew()) {
                settings = initDefaultSettings(settingsFile);
            } else {
                settings = new Properties();
                try (InputStream settingsFileInputStream = new FileInputStream(settingsFile.getFile())) {
                    settings.load(settingsFileInputStream);
                }
            }
        } catch (Exception exception) {
            throw (new RuntimeException(exception));
        }
    }

    public Path workspacePath() {
        return Paths.get(settings.getProperty(WORKSPACE_PATH__SETTING_NAME));
    }

    private Properties initDefaultSettings(SettingsFile settingsFile) throws Exception {
        Properties settings = new Properties();

        settings.put(WORKSPACE_PATH__SETTING_NAME, Paths.get(System.getProperty("user.home"), WORKSPACE_FOLDER_NAME).toString());

        try (FileOutputStream settingsFileOutputStream = new FileOutputStream(settingsFile.getFile())) {
            settings.store(settingsFileOutputStream, null);
        }

        return settings;
    }
}
