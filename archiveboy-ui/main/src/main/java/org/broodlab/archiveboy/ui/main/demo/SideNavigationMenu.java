package org.broodlab.archiveboy.ui.main.demo;

import com.jfoenix.controls.JFXListView;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;
import org.broodlab.archiveboy.ui.common.ArchiveBoyFxmlLoaderFactory;
import org.broodlab.archiveboy.ui.common.Dispatcher;
import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.ComponentDemoRegistration;
import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.ComponentDemoRegistry;
import org.broodlab.archiveboy.ui.common.demo.events.ChangeComponentDemo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.Map;

@Component
@Scope("prototype")
public class SideNavigationMenu extends HBox {

    private ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory;
    private Dispatcher dispatcher;
    private ComponentDemoRegistry componentDemoRegistry;

    @FXML
    JFXListView<Label> sideNavigationMenuItems;

    @Autowired
    public SideNavigationMenu(
            ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory,
            Dispatcher dispatcher,
            ComponentDemoRegistry componentDemoRegistry) {
        this.archiveBoyFxmlLoaderFactory = archiveBoyFxmlLoaderFactory;
        this.dispatcher = dispatcher;
        this.componentDemoRegistry = componentDemoRegistry;
    }

    @PostConstruct
    public void init() throws IOException {
        archiveBoyFxmlLoaderFactory
                .createUiComponentFxmlLoader(this, "/demo/SideNavigationMenu.fxml")
                .load();

        componentDemoRegistry
                .get()
                .entrySet()
                .stream()
                .map((e) -> e.getValue())
                .forEach(this::doIt);

        sideNavigationMenuItems.setOnMouseClicked(e ->
                dispatcher.dispatch(new ChangeComponentDemo(
                        componentDemoRegistry
                                .get().get(sideNavigationMenuItems.getSelectionModel().getSelectedItem().getId()))
                ));
    }

    private void doIt(ComponentDemoRegistration componentDemoRegistration) {
        Label sideNavigationMenuItemLabel = new Label(componentDemoRegistration.getTitle());
        sideNavigationMenuItemLabel.setId(componentDemoRegistration.getId());

        sideNavigationMenuItems
                .getItems()
                .add(sideNavigationMenuItemLabel);
    }
}
