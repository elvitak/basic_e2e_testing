describe('user that fills out registration form', () => {
    describe('with all necessery information', () => {
        before(() => {
            cy.visit("/");
            cy.get("input[name=firstName]").type("Elvita");
            cy.get("input[name=email]").type("elvita@mail.com");
            cy.get("input[name=password]").type("my_secret_password");
            cy.get("input[id=subbmitBtn]").click();
        });
        it('is expected to see a confirmation message', () => {
            cy.get("div[id=confirmationMessage]").should("contain.text", "Thank you for signing up!")
        });
    });

    describe.only('with some fields missing', () => {
        before(() => {
            cy.visit("/");
            cy.get("input[name=firstName]").type("Elvita");
            //cy.get("input[name=email]").type("elvita@mail.com");
            cy.get("input[name=password]").type("my_secret_password");
            cy.get("input[id=subbmitBtn]").click();
        });
        it('is expected to see an error message', () => {   
            cy.get("div[id=confirmationMessage]").should("contain.text", "Hey! You need to give us an e-mail")
        });
    });
});
