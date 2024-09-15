import { AppRoutes } from "../../src/routes";

describe("HomePage Component", () => {
  beforeEach(() => {
    cy.visit(AppRoutes.Home);
  });

  it('debería tener el botón "Join" deshabilitado cuando el nombre está vacío', () => {
    cy.get('[data-testid="join-button"]').should("be.disabled");
  });

  it('debería actualizar el valor del input y habilitar el botón "Join" al ingresar un nombre', () => {
    const username = 'John Doe';

    cy.get('[data-testid="username-input"]')
      .type(username)
      .should('have.value', username);

    cy.get('[data-testid="join-button"]').should('not.be.disabled');
  });

  it(`debería navegar a ${AppRoutes.Game} al hacer click en "Join" con un nombre válido`, () => {
    cy.get('[data-testid="username-input"]').type("John Doe");
    cy.get('[data-testid="join-button"]').click();
    cy.url().should("include", AppRoutes.Game);
  });
});
