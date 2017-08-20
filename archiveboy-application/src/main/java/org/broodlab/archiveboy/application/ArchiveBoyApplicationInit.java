package org.broodlab.archiveboy.application;

import org.broodlab.archiveboy.api.settings.ISettingsService;
import org.broodlab.archiveboy.api.workspace.IWorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class ArchiveBoyApplicationInit {

    private ISettingsService settingsService;
    private IWorkspaceService workspaceService;

    @Autowired
    public ArchiveBoyApplicationInit(ISettingsService settingsService, IWorkspaceService workspaceService) {
        this.settingsService = settingsService;
        this.workspaceService = workspaceService;
    }

    @EventListener
    public void onContextRefreshed(ContextRefreshedEvent contextRefreshedEvent) throws Exception {
        settingsService.init();
        workspaceService.init(settingsService.workspacePath());
    }
}
