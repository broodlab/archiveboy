package org.broodlab.archiveboy.ui;

import javafx.application.Application;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class ArchiveBoyUiLauncher {

    @EventListener
    public void onContextRefreshed(ContextRefreshedEvent contextRefreshedEvent) {
        Application.launch(ArchiveBoyUi.class);
    }
}
