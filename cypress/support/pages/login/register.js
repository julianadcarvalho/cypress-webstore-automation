import { ELEMENTS as el } from './elements';

class register{

    fazerLogin(){
        cy.get('.login').click();
        cy.contains('Authentication')

        cy.get(el.email).type('64teste@teste.com');
        cy.get('#SubmitCreate > span').click();
        cy.contains('Authentication')
    }

    fazerCadastro(){

        cy.get(':nth-child(4) > .top').click();

        cy.get(el.firstname).type('Joana');
        cy.get(el.lastname).type('Silva');
        cy.get(el.passwd).type('123456789').tab();
        cy.get(el.days).type('20').tab();
        cy.get(el.months).type('2').tab();
        cy.get(el.years).type('2000').tab();
        cy.get(el.address1).type('teste, teste, teste').tab();
        cy.get(el.city).type('Miami').tab();
        cy.get(el.state).select('Florida');
        cy.get(el.country).tab();
        cy.get(el.postcode).type('12345').tab();
        cy.get(el.msg).type('testetesteteste').tab();
        cy.get(el.phone).type('11 12345678').tab();

        cy.get('#submitAccount > span').click();
        cy.contains('My account')
    }

    fazerLogoutLogin(){

        cy.get('.logout').click();
        cy.contains('Authentication')

        cy.get('.login').click();

        cy.get(el.email).type('64teste@teste.com').tab();
        cy.get(el.passwd).type('123456789');
        cy.get('#SubmitLogin > span').click();
        cy.contains('My account')
        cy.wait(2000);
    }  
}

export default new register();