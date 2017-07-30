package org.broodlab.archiveboy.api.settings;

import java.nio.file.Path;

public interface ISettingsService {

    void init();

    Path workspacePath();
}
