package org.broodlab.archiveboy.ui.main.demo;

import com.jfoenix.controls.JFXListView;
import io.reactivex.rxjavafx.observables.JavaFxObservable;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;
import org.broodlab.archiveboy.ui.common.ArchiveBoyFxmlLoaderFactory;
import org.broodlab.archiveboy.ui.common.Dispatcher;
import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.ComponentDemoRegistry;
import org.broodlab.archiveboy.ui.common.demo.events.ChangeComponentDemo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Component
@Scope("prototype")
public class DemoArea extends HBox {

    private ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory;
    private Dispatcher dispatcher;
    private DemoAreaStore demoAreaStore;

    @Autowired
    public DemoArea(ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory,
                    Dispatcher dispatcher,
                    DemoAreaStore demoAreaStore) {
        this.archiveBoyFxmlLoaderFactory = archiveBoyFxmlLoaderFactory;
        this.dispatcher = dispatcher;
        this.demoAreaStore = demoAreaStore;
    }

    @PostConstruct
    public void init() throws IOException {
        archiveBoyFxmlLoaderFactory
                .createUiComponentFxmlLoader(this, "/demo/DemoArea.fxml")
                .load();

        JavaFxObservable
                .changesOf(demoAreaStore
                        .componentDemoRegistration())
                .subscribe(v -> {

                    getChildren().clear();
                    getChildren().add(v.getNewVal().getComponentDemoFactory().createComponentDemo());
                });

    }
}

