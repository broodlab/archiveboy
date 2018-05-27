package org.broodlab.archiveboy.application.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.StandardEnvironment;

@SpringBootApplication(scanBasePackages = {
        "org.broodlab.archiveboy.ui"
})
public class ComponentDemoApplication {

    public static void main(String[] arguments) {
        SpringApplication app = new SpringApplication(ComponentDemoApplication.class);
        ConfigurableEnvironment environment = new StandardEnvironment();
        environment.setActiveProfiles("demo");
        app.setEnvironment(environment);
        app.run(arguments);
    }
}
