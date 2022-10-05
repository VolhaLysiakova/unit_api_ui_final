import { PAGES } from "../support/types";
import { homePage } from "./home_page";
import { lobbyPage } from "./lobby_page";
import { tournamentsPage } from "./tournaments_page";

export class PageFactory {
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            case PAGES.LOBBY:
                return lobbyPage;
            case PAGES.TOURNAMENTS:
                return tournamentsPage;
            default:
                throw new Error("Incorrect page name!");
        }
    }
}