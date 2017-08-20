package org.broodlab.archiveboy.api.settings.internal;

import org.springframework.stereotype.Component;

import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class UserHomePathProvider implements IBaseFolderPathProvider {

    public Path provideBaseFolderPath() {
        return Paths.get(System.getProperty("user.home"));
    }
}
