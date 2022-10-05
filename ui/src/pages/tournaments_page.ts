import { baseUrl } from "../support/constants";
import { Element } from "../support/element";
import { BasePage } from "./base_page";

export class TournamentsPage extends BasePage {
    constructor() {
        super()

        this.url = `${baseUrl}/tournaments`;

        this.labels = {
           "Tournaments header": this.tournamentsHeader
        }
    }

    get tournamentsHeader() {
        return new Element('//*[@id="root"]/div/div[2]/div[1]/div[1]')
    }
}

export const tournamentsPage = new TournamentsPage()