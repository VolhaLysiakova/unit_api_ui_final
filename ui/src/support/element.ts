export class Element {
    private readonly element: any;

    constructor (locator: string) {
        this.element = $(locator);
    }

    public async waitForDisplayed () {
        await (await this.element).waitForDisplayed()
    }

    public async waitForExist() {
        await (await this.element).waitForExist()
    }

    public async click () {
        await this.waitForDisplayed()
        await (await this.element).waitForClickable()
        await (await this.element).click()
    }

    public async setValue (value: string) {
        await this.waitForDisplayed()
        await (await this.element).setValue(value)
    }

    public async expectToHaveTextContaining (text: string) {
        await this.waitForDisplayed()
        await expect(await this.element).toHaveTextContaining(text)
    }

    public async getText() {
        await this.waitForDisplayed()
        return await (await this.element).getText()
    }

    public async doubleClick() {
        await (await this.element).doubleClick()
    }

    public async expectToBeClickable() {
        await expect(this.element).toBeClickable()
    }

    public async expectNotToBeClickable() {
        await expect(this.element).not.toBeClickable()
    }

    public async expectToHaveAttrContaining (attr: string, text: string) {
        await this.waitForDisplayed()
        await expect(await this.element).toHaveAttrContaining(attr, text)
    }

}