package org.broodlab.archiveboy.ui.components.molecules.list_item;

import javafx.scene.Node;
import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.ComponentDemoRegistration;
import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.ComponentDemoRegistry;
import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.IComponentDemoFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class MListItemDemoFactory implements IComponentDemoFactory {

    private ComponentDemoRegistry componentDemoRegistry;
    private ApplicationContext applicationContext;

    @Autowired
    public MListItemDemoFactory(ComponentDemoRegistry componentDemoRegistry, ApplicationContext applicationContext) {
        this.componentDemoRegistry = componentDemoRegistry;
        this.applicationContext = applicationContext;

    }

    @Override
    public Node createComponentDemo() {
        return applicationContext.getBean(MListItem.class);
    }

    @PostConstruct
    public void init() {
        componentDemoRegistry
                .get()
                .put("MListItem", new ComponentDemoRegistration()
                        .setId("MListItem")
                        .setTitle("MListItem")
                        .setComponentDemoFactory(this));
    }
}
