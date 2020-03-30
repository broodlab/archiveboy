import {ApplicationModule} from "./application";
import {enableProdMode} from "@angular/core";
import {environment} from "./environments/environment";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(ApplicationModule)
    .catch((err) => console.error(err));
