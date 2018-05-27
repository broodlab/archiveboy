package org.broodlab.archiveboy.application.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.StandardEnvironment;

@SpringBootApplication(scanBasePackages = {
        "org.broodlab.archiveboy.api",
        "org.broodlab.archiveboy.ui",
        "org.broodlab.archiveboy.application"
})
public class ArchiveBoyApplication {

    public static void main(String[] arguments) {
        SpringApplication app = new SpringApplication(ArchiveBoyApplication.class);
        ConfigurableEnvironment environment = new StandardEnvironment();
        environment.setActiveProfiles("main");
        app.setEnvironment(environment);
        app.run(arguments);
    }
}
