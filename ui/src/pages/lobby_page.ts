import { baseUrl } from "../support/constants";
import { Element } from "../support/element";
import { BasePage } from "./base_page";

export class LobbyPage extends BasePage {
    constructor() {
        super()

        this.url = `${baseUrl}/lobby`;

        this.labels = {
           "Lobby header": this.lobbyHeader
        }
    }

    get lobbyHeader() {
        return new Element('[class*="we3QtB+ueliBYBfbS++Osw=="]')
    }

}

export const lobbyPage = new LobbyPage()