import { AppRoutes } from "../../src/routes";

const mockRanking = [
  { name: "Joe", score: 40 },
  { name: "Sara", score: 35 },
  { name: "David", score: 9 },
];

describe("Ranking Component", () => {
  beforeEach(() => {
    window.localStorage.setItem("ranking", JSON.stringify(mockRanking));
    cy.visit(AppRoutes.Home);
  });

  it("debería renderizar correctamente la página de ranking añadiendo al nuevo jugador 'Peter' con 0 puntos", () => {
    cy.get('[data-testid="username-input"]').type("Peter");
    cy.get('[data-testid="join-button"]').click();
    cy.get('[data-testid="navigation-button"]').click();

    cy.get(".title").should("contain.text", "Ranking");

    cy.get("table tbody tr").should("have.length", mockRanking.length + 1);

    cy.get("table tbody tr")
      .eq(0)
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "1");
        cy.get("td").eq(1).should("contain.text", "Joe");
        cy.get("td").eq(2).should("contain.text", "40");
      });

    cy.get("table tbody tr")
      .eq(1)
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "2");
        cy.get("td").eq(1).should("contain.text", "Sara");
        cy.get("td").eq(2).should("contain.text", "35");
      });

    cy.get("table tbody tr")
      .eq(2)
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "3");
        cy.get("td").eq(1).should("contain.text", "David");
        cy.get("td").eq(2).should("contain.text", "9");
      });

    cy.get("table tbody tr")
      .eq(3)
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "4");
        cy.get("td").eq(1).should("contain.text", "Peter");
        cy.get("td").eq(2).should("contain.text", "0");
      });
  });

  it("debería renderizar correctamente la página de ranking sin añadir nuevos jugadores", () => {
    cy.get('[data-testid="username-input"]').type("Joe");
    cy.get('[data-testid="join-button"]').click();
    cy.get('[data-testid="navigation-button"]').click();

    cy.get(".title").should("contain.text", "Ranking");

    cy.get("table tbody tr").should("have.length", mockRanking.length);

    cy.get("table tbody tr")
      .eq(0)
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "1");
        cy.get("td").eq(1).should("contain.text", "Joe");
        cy.get("td").eq(2).should("contain.text", "40");
      });

    cy.get("table tbody tr")
      .eq(1)
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "2");
        cy.get("td").eq(1).should("contain.text", "Sara");
        cy.get("td").eq(2).should("contain.text", "35");
      });

    cy.get("table tbody tr")
      .eq(2)
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "3");
        cy.get("td").eq(1).should("contain.text", "David");
        cy.get("td").eq(2).should("contain.text", "9");
      });
  });
});
