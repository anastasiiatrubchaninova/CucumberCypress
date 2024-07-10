import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('precondition', () => {
    cy.visit(('https://docs.cypress.io/api/commands/visit'))
})

When('action',()=>{
    cy.contains('a')
})

Then('testable outcome',()=>{
    cy.contains('a')
})
