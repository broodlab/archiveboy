import {Api} from "@archiveboy/api";

export const api: Api = window["require"]("electron").remote.getGlobal("api");
