import { expect } from "chai";
import { Registration } from "./src/registration";

let registration: any;
const REG_ERROR_MESSAGE = 'REGISTRATION IS PROCESSED INCORRECTLY'

describe ("Tests for registration", () => {
    before ('Initialize class instance', () => {
        registration = new Registration;
    })

    it ('Should accept email with "@" and >=7 symbols', () => {
        expect(registration.emailField("bla@bla.com")).to.be.equal("bla@bla.com", REG_ERROR_MESSAGE)
    }),

    it ('Should not accept email without "@"', () => {
        expect(() => registration.emailField("blabla.com")).to.throw("Please enter valid email")
    })

    it ('Should not accept email with <7 symbols', () => {
        expect(() => registration.emailField("b@b.co")).to.throw("Please enter valid email")
    })

    it ('Should accept password from 5 to 15 symbols', () => {
        expect(registration.passwordField("12345667")).to.be.equal("12345667", REG_ERROR_MESSAGE)
    }),

    it ('Should accept password with 5 symbols', () => {
        expect(registration.passwordField("12345")).to.be.equal("12345", REG_ERROR_MESSAGE)
    }),

    it ('Should accept password with 15 symbols', () => {
        expect(registration.passwordField("123451234512345")).to.be.equal("123451234512345", REG_ERROR_MESSAGE)
    }),

    it ('Should not accept password with less than 5 symbols', () => {
        expect(() => registration.passwordField("1234")).to.throw("Please enter password from 5 to 15 symbols")
    }),

    it ('Should not accept password with more than 15 symbols', () => {
        expect(() => registration.passwordField("1234512345123456")).to.throw("Please enter password from 5 to 15 symbols")
    }),

    it ('Should accept nickname from 3 to 15 symbols', () => {
        expect(registration.nickNameField("Nickname")).to.be.equal("Nickname", REG_ERROR_MESSAGE)
    }),

    it ('Should accept nickname with 3 symbols', () => {
        expect(registration.nickNameField("Nic")).to.be.equal("Nic", REG_ERROR_MESSAGE)
    }),

    it ('Should accept nickname with 15 symbols', () => {
        expect(registration.nickNameField("Fifteensymbols!")).to.be.equal("Fifteensymbols!", REG_ERROR_MESSAGE)
    }),

    it ('Should not accept nickname with less than 3 symbols', () => {
        expect(() => registration.nickNameField("Ni")).to.throw("Please enter nickname from 3 to 15 symbols")
    }),

    it ('Should not accept nickname with more than 15 symbols', () => {
        expect(() => registration.nickNameField("My nickname is toooo long")).to.throw("Please enter nickname from 3 to 15 symbols")
    }),

    after (() => {
        registration = null;
    })
})