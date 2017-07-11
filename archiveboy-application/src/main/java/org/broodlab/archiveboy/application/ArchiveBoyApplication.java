package org.broodlab.archiveboy.application;

import org.broodlab.archiveboy.ui.ArchiveBoyUiLauncher;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"org.broodlab.archiveboy.*"})
public class ArchiveBoyApplication {

    public static void main(String[] arguments) {
        SpringApplication.run(ArchiveBoyApplication.class);
        ArchiveBoyUiLauncher.launch();
    }
}
