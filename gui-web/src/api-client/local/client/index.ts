import {Api} from "@archiveboy/api";

for (let x in window["require"]("electron")) {
    console.log(x);
}

export const api: Api = window["require"]("electron").remote.getGlobal("api");
