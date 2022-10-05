import { Given, Then } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/page-factory";
import { baseUrl } from "../support/constants";
import { BUTTON_STATUS, ELEMENT_TYPES, PAGES } from "../support/types";

Given (/^the User opens "(.+)" page via url$/, async (pageName: PAGES) => {
    await PageFactory.getPage(pageName).open()
});

Given (/^the User clicks on "(.+)" (input|button|label|toggle) on "(.+)" page$/, async (elementName: string, elementType: ELEMENT_TYPES, pageName: PAGES) => {
    await (await PageFactory.getPage(pageName).getElement(elementName, elementType)).click()
});

Then (/^the User sees "(.+)" (input|button|label|toggle) on "(.+)" page( with "(.+)" inner text)?$/, async (elementName: string, elementType: ELEMENT_TYPES, pageName: PAGES, innerText?: string) => {
    const element = await (PageFactory.getPage(pageName).getElement(elementName, elementType))
    await element.waitForDisplayed()
    if (innerText) {
        await element.expectToHaveTextContaining(innerText)
    }
});

Then(/^the User is redirected to "(.+)" page$/, async (pageName: PAGES) => {
    await expect(browser).toHaveUrl(`${baseUrl}${pageName.toLowerCase()}`)
});

Then (/^the User sees that "(.+)" (input|button|label|toggle) is "(.+)" on "(.+)" page$/, async (elementName: string, elementType: ELEMENT_TYPES, status: BUTTON_STATUS, pageName: PAGES ) => {
    const element = await (PageFactory.getPage(pageName).getElement(elementName, elementType))
    if (status === 'enabled') {
        await element.expectToBeClickable()
    } else {
        await element.expectNotToBeClickable()
    }
});
