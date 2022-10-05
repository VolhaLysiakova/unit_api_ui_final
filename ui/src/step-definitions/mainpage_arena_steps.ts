import { When, Then } from "@wdio/cucumber-framework";
import { homePage } from "../pages/home_page";
import { userFoa, userFree } from "../support/constants";
import { ACCOUNT_TYPES, BOARD_COLOR } from "../support/types";

When (/^the User logs in with "(.+)" account$/, async (account: ACCOUNT_TYPES) => {
    const email = account === 'Free' ? userFree.email : userFoa.email;
    const password = account === 'Free' ? userFree.password : userFoa.password
    await homePage.clickOnSignInButton()
    await homePage.logIn(email, password);
});

Then (/^the User sees board with "(.+)" color on "Home" page$/, async (color: BOARD_COLOR) => {
    switch (color) {
        case BOARD_COLOR.STANDARD:
            await expect(homePage.chessBoard).toHaveAttrContaining('alt', 'standart chessboard');
            break;
        case BOARD_COLOR.TEXTBOOK:
            await expect(homePage.chessBoard).toHaveAttrContaining('alt', 'textbook chessboard');
            break;
        case BOARD_COLOR.WORLD_CHESS:
            await expect(homePage.chessBoard).toHaveAttrContaining('alt', 'worldchess chessboard');
            break;
        default:
            throw new Error("Incorrect chessboard color!");
    }
});

When (/^the User sees "Best today" player on the "Home" page$/, async function () {
    let bestTodayName = (await homePage.bestTodayButton.getText()).split(',')[1].trim();
    this.bestTodaySurname = bestTodayName
});

Then (/^the User sees the profile of "Best today" player$/, async function () {
    await expect(await homePage.bestTodayNameFromProfileLabel).toHaveTextContaining(this.bestTodaySurname)
});






