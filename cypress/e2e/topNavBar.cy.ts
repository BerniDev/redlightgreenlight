import { AppRoutes } from "../../src/routes";

const playerName = "Peter";

describe("Ranking Component", () => {
  beforeEach(() => {
    cy.visit(AppRoutes.Home);
    cy.get('[data-testid="username-input"]').type(playerName);
    cy.get('[data-testid="join-button"]').click();
    cy.get('[data-testid="navigation-button"]').click();
  });

  it(`debería mostrar el nombre del jugador con formato 'Hi ${playerName}!'`, () => {
    cy.get('[data-testid="salute-message"]').should("contain.text", `Hi ${playerName}!`);
  });

  it(`debería navegar a ${AppRoutes.Home} al hacer click en "Exit"`, () => {
    cy.get('[data-testid="exit-button"]').click();
    cy.url().should("include", AppRoutes.Home);
  });

  it(`debería navegar a ${AppRoutes.Game} al hacer click en "Game"`, () => {
    cy.get('[data-testid="navigation-button"]').click();
    cy.url().should("include", AppRoutes.Game);
  });
});
