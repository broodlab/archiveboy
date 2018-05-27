package org.broodlab.archiveboy.ui.main.demo;

import javafx.application.Application;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@Profile("demo")
public class ComponentDemoUiLauncher {

    @EventListener
    public void onContextRefreshed(ContextRefreshedEvent contextRefreshedEvent) {
        Application.launch(ComponentDemoUi.class);
    }
}
