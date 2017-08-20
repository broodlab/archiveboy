package org.broodlab.archiveboy.api.workspace.internal;

import org.broodlab.archiveboy.api.workspace.IWorkspaceService;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.nio.file.Files.createDirectories;

@Component
public class WorkspaceService implements IWorkspaceService {

    public void init(Path workspacePath) {

        if (Files.exists(workspacePath)) {
            return;
        }

        try {
            createDirectories(Paths.get(workspacePath.toString()));
        } catch (Exception exception) {
            throw (new RuntimeException(exception));
        }
    }
}
