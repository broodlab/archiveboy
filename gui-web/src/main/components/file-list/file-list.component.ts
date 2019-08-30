import {Component, Input} from "@angular/core";

@Component({
    selector: "ab-file-list",
    styleUrls: ["./file-list.component.scss"],
    templateUrl: "./file-list.component.html"
})
export class FileListComponent {
    @Input()
    files: string[];
}
