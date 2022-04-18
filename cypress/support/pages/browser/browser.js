
class browser{
    abrirBrowser(){
    cy.visit('http://automationpractice.com/index.php')
    cy.contains('Dresses')
    }
}

export default new browser();