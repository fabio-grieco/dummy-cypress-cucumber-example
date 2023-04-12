import {doLogin} from "./utils/auth"
import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given(/I am logged in/, async () => {
    await doLogin()
    cy.getAllCookies().then(cookies => {
            console.log(cookies)
            // ... do something with the cookies
        }
    )
})

Given(
    /^A dummy precondition$/,
    () => {
        cy.get("body").should("be.visible")
    }
)