package org.broodlab.archiveboy.ui.common.demo.events;

import org.broodlab.archiveboy.ui.common.demo.component_demo_registry.ComponentDemoRegistration;

public class ChangeComponentDemo {

    private ComponentDemoRegistration componentDemoRegistration;

    public ChangeComponentDemo(ComponentDemoRegistration componentDemoRegistration) {
        this.componentDemoRegistration = componentDemoRegistration;
    }

    public ComponentDemoRegistration getComponentDemoRegistration() {
        return componentDemoRegistration;
    }
}
