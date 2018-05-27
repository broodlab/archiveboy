package org.broodlab.archiveboy.ui.common.demo.component_demo_registry;

public class ComponentDemoRegistration {

    private String id;
    private String title;
    private IComponentDemoFactory componentDemoFactory;

    public String getId() {
        return id;
    }

    public ComponentDemoRegistration setId(String id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public ComponentDemoRegistration setTitle(String title) {
        this.title = title;
        return this;
    }

    public IComponentDemoFactory getComponentDemoFactory() {
        return componentDemoFactory;
    }

    public ComponentDemoRegistration setComponentDemoFactory(IComponentDemoFactory componentDemoFactory) {
        this.componentDemoFactory = componentDemoFactory;
        return this;
    }
}
