package org.broodlab.archiveboy.ui.common.demo.component_demo_registry;

import javafx.scene.Node;
import javafx.scene.control.Label;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class ComponentDemoRegistry {

    private Map<String, ComponentDemoRegistration> registry = new HashMap();

    public ComponentDemoRegistry() {

        registry.put("foo", new ComponentDemoRegistration()
                .setId("foo")
                .setTitle("Foo")
                .setComponentDemoFactory(new IComponentDemoFactory() {
                    @Override
                    public Node createComponentDemo() {
                        return new Label("Foo");
                    }
                }));

        registry.put("bar", new ComponentDemoRegistration()
                .setId("bar")
                .setTitle("Bar")
                .setComponentDemoFactory(new IComponentDemoFactory() {
                    @Override
                    public Node createComponentDemo() {
                        return new Label("Bar");
                    }
                }));
    }

    public Map<String, ComponentDemoRegistration> get() {
        return registry;
    }
}
