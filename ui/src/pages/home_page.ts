import { baseUrl } from "../support/constants";
import { Element } from "../support/element";
import { BasePage } from "./base_page";

export class HomePage extends BasePage {
    constructor() {
        super()

        this.url = baseUrl;

        this.inputs = {
            "Email": this.inputEmail,
            "Password": this.inputPassword
        }

        this.buttons = {
            "Sign in": this.signInButton,
            "Submit": this.submitInSignInFormButton,
            "FOA Rated": this.foaRatedButton,
            "Rated": this.ratedButton,
            "Non-rated": this.nonRatedButton,
            "Upgrade now": this.upgradeNowButton,
            "Lobby": this.lobbyButton,
            "Appearance": this.appearanceButton,
            "Standard": this.standardColorBoard,
            "World Chess": this.worldChessColorBoard,
            "Textbook": this.textBookColorBoard,
            "Done": this.doneButtonSaveAppearance,
            "Tournaments today": this.tournamentsTodayButton,
            "Invite a friend": this.inviteAFriendButton,
            "Best today": this.bestTodayButton
        }

        this.labels = {
            "Upgrade to Pro": this.upgradeToProLabel,
            "New Pro account": this.newProAccountLabel,
            "Best today full name": this.bestTodayNameFromProfileLabel
        }
    }

    get signInButton() {
        return new Element('[class*="sign_in"]')
    }

    get inputEmail() {
        return new Element('[name="email"]')
    }

    get inputPassword() {
        return new Element('[name="password"]')
    }

    get submitInSignInFormButton() {
        return new Element('//p[text()="Sign in"]')
    }

    get foaRatedButton() {
        return new Element('//div[text()="FOA Rated"]')
    }

    get ratedButton() {
        return new Element('//div[text()="Rated"]')
    }

    get nonRatedButton() {
        return new Element('//div[text()="Non-rated"]')
    }

    get upgradeNowButton() {
        return new Element('[class*="primary-btn"]') 
    }

    get inviteAFriendButton() {
        return new Element('//button[text()="Invite a friend"]')
    }

    get lobbyButton() {
        return new Element('[href="/lobby"]')
    }

    get tournamentsTodayButton() {
        return new Element('[href="/tournaments"]')
    }

    get upgradeToProLabel() {
        return new Element('//div/div[2]/div[3]/div[2]/div[1]/div[5]')
    }

    get appearanceButton() {
        return new Element('[class*="gzYVOq"]') 
    }

    get standardColorBoard() {
        return new Element('//div[text()="Standard"]/..')
    }

    get worldChessColorBoard() {
        return new Element('//div[text()="World Chess"]/..')
    }

    get textBookColorBoard() {
        return new Element('//div[text()="Textbook"]/..')
    }

    get doneButtonSaveAppearance() {
        return new Element('//button[text()="Done"]')
    }

    get chessBoard() {
        return $('[alt*="chessboard"]') 
    }

    get newProAccountLabel() {
        return new Element('[class*="fh9YxeTJwu95bsDuu6-9OQ=="]') 
    }

    get bestTodayButton() {
        return new Element('//*[@id="root"]/div/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/a[2]') 
    }

    get bestTodayNameFromProfileLabel() {
        return new Element('//*[@id="root"]/div/div[2]/div/div[3]/div[3]') 
    }
    
    public async clickOnSignInButton() {
        await this.signInButton.click()
    }

    public async logIn (email: string, password: string) {
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await this.submitInSignInFormButton.click()
    }
}

export const homePage = new HomePage()