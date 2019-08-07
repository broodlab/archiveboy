import * as fs from "fs";
import {Component, OnInit} from "@angular/core";
import {ipcRenderer} from "electron";

@Component({
    selector: "ab-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    ngOnInit() {
        ipcRenderer.on("selected-directory", (event, path) => {
            console.log(fs.readdirSync(path.toString()));
        });
    }

    selectFiles() {
        ipcRenderer.send("open-file-dialog");
    }
}
