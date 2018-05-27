package org.broodlab.archiveboy.ui.main.main;

import javafx.application.Application;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@Profile("main")
public class ArchiveBoyUiLauncher {

    @EventListener
    public void onContextRefreshed(ContextRefreshedEvent contextRefreshedEvent) {
        Application.launch(ArchiveBoyUi.class);
    }
}
