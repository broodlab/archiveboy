package org.broodlab.archiveboy.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "org.broodlab.archiveboy")
public class ArchiveBoyApplication {

    public static void main(String[] arguments) {
        SpringApplication.run(ArchiveBoyApplication.class, arguments);
    }
}
