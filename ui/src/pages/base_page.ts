import { Element } from "../support/element";
import { ELEMENT_TYPES } from "../support/types";

export class BasePage {
    protected url!: string;
     
    protected inputs!: { [key: string]: Element };
    protected buttons!: { [key: string]: Element };
    protected labels!: { [key: string]: Element };
    protected toggles!: { [key: string]: Element };

    get currentUrl() {
        return browser.getUrl()
    }

    public async open () {
        await browser.url(this.url)
    }

    public async back () {
        await browser.back()
    }

    public async getElement (elementName: string, elementType: ELEMENT_TYPES) {
        if (this[`${elementType}s`]) {
            const elementsBlock = this[`${elementType}s`];
            if (elementName in elementsBlock) {
                return elementsBlock[elementName];
            } else throw new Error ("Invalid element name is provided!")
        } else throw new Error ("Invalid element type is provided!")
    }
} 