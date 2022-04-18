/// <reference types="cypress" />

import browser from "../support/pages/browser/browser";
import register from "../support/pages/login/register";
import buy from "../support/pages/buy/pesquisarComprar";

describe('shopping', () => {

  it('devem renderizar o browser', () => {
      browser.abrirBrowser();
  })

  it('Clicar em SIGN IN renderizar pagina e clicar CREATE AN ACCOUNT', () => 
    {
     register.fazerLogin();
     register.fazerCadastro();
     register.fazerLogoutLogin();
  })

  it('Deve pesquisar por item e adicionar no carrinho, aumentando a quantidade de item, posteriomente fazer logout', () => {
    buy.pesquisarAdicionar();
  })

})
