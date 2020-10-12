const links = [
    'https://www.linkedin.com/in/roy-damari-26307a1b7/']

describe("endorse", () => {
    it("endorse", () => {
        cy.visit("https://www.linkedin.com");
        cy.get('.input__input')
            .each(($el, index) => {
                if (index === 0) {
                    //enter your email here
                    cy.wrap($el).type('<email>');
                } else {
                    //enter your password here
                    cy.wrap($el).type('<password>');
                }
            });
        cy.get('.sign-in-form__submit-button').click();
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            cy.visit(link);
            cy.scrollTo(0, 500)
            cy.scrollTo(500, 1000)
            cy.scrollTo(1000, 1500)
            cy.get(".pv-skills-section__additional-skills").click();
            cy.get(".pv-skill-entity__featured-endorse-button-shared").each(($el, index) => {
                if (!$el.hasClass('artdeco-button--muted')) {
                    cy.wrap($el).click();
                    cy.wait(1000)
                    cy.get('.pv-endorsement-followup__radio-button').each(($el, index) => {
                        if (index === 2) {
                            cy.wrap($el).click();
                        }
                    })
                    cy.get('.artdeco-button--primary').each(($el, index) => {
                        if (index === 2) {
                            cy.wrap($el).click();
                        }
                    })
                }

            })
        }
    });
});
