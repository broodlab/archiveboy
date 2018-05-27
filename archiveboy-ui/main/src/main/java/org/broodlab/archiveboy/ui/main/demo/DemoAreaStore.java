package org.broodlab.archiveboy.ui.main.demo;

import javafx.beans.InvalidationListener;
import javafx.beans.property.ReadOnlyObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.value.ChangeListener;
import org.broodlab.archiveboy.ui.common.ClosedEvent;
import org.broodlab.archiveboy.ui.common.Dispatcher;
import org.broodlab.archiveboy.ui.common.LaunchedEvent;
import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.ComponentDemoRegistration;
import org.broodlab.archiveboy.ui.common.demo.events.ChangeComponentDemo;
import org.springframework.stereotype.Component;

@Component
public class DemoAreaStore {

    private SimpleObjectProperty<ComponentDemoRegistration> componentDemoRegistration = new SimpleObjectProperty<>();
    private Dispatcher dispatcher;

    public DemoAreaStore(Dispatcher dispatcher) {
        this.dispatcher = dispatcher;

        dispatcher
                .observable(ChangeComponentDemo.class)
                .subscribe(e -> componentDemoRegistration.set(e.getComponentDemoRegistration()));
    }

    public ReadOnlyObjectProperty<ComponentDemoRegistration> componentDemoRegistration() {
        return componentDemoRegistration;
    }

}
