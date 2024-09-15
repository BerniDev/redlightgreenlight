// import { LightColor } from "../../src/models/game";
import { AppRoutes } from "../../src/routes";

describe("Ranking Component con nuevo jugador", () => {
  beforeEach(() => {
    cy.visit(AppRoutes.Home);
    cy.get('[data-testid="username-input"]').type("Peter");
    cy.get('[data-testid="join-button"]').click();
  });

  it("debería renderizar correctamente la página de game", () => {
    cy.get(".title").should("contain.text", "RLGL Game");
    cy.get('[data-testid="maxscore-message"]').should(
      "contain.text",
      "High Score: 0"
    );
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
    // cy.get(".traffig-light")
    //   .should("have.css", "background-color")
    //   .and("eq", LightColor.red);
  });

  it("debería sumar puntos al score si pulsa el boton Right", () => {
    cy.wait(3100);
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
    cy.get('[data-testid="right-step-button"]').click();

    cy.get('[data-testid="score-message"]').should("contain.text", "score: 1");
  });

  it("debería sumar puntos al score si pulsa alternativamente Right y Left y actualizarse la puntuación máxima", () => {
    cy.wait(3100);
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
    
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 1");

    cy.get('[data-testid="left-step-button"]').click();
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 2");

    cy.get('[data-testid="maxscore-message"]').should("contain.text", "High Score: 2");
  });

  it("debería restar puntos al score si pulsa consecutivamente el mismo boton Right o Left", () => {
    cy.wait(3100);
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
    
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 1");

    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="score-message"]').should("contain.text", "score: -2");
  });

  it("debería poner a 0 puntos el score si pulsa cualquier botón con el semáforo rojo", () => {
    cy.wait(3100);
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
    
    cy.get('[data-testid="left-step-button"]').click();
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="left-step-button"]').click();
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 3");

    cy.wait(10000);

    cy.get('[data-testid="right-step-button"]').click();
    
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
  });
});

const mockRanking = [
  { name: "Joe", score: 5 },
];

describe("Ranking Component con un jugador ya registarado en el ranking", () => {
  beforeEach(() => {
    window.localStorage.setItem("ranking", JSON.stringify(mockRanking));
    cy.visit(AppRoutes.Home);
    cy.get('[data-testid="username-input"]').type("Joe");
    cy.get('[data-testid="join-button"]').click();
  });

  it("debería renderizar correctamente la página de game con el maxscore registrado en el localstorage", () => {
    cy.get('[data-testid="maxscore-message"]').should(
      "contain.text",
      "High Score: 5"
    );
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
  });

  it("debería actualizar el valor de maxscore si supera la puntuación previamente registrada", () => {
    cy.wait(3100);
    cy.get('[data-testid="score-message"]').should("contain.text", "score: 0");
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="left-step-button"]').click();
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="left-step-button"]').click();
    cy.get('[data-testid="right-step-button"]').click();
    cy.get('[data-testid="left-step-button"]').click();

    cy.get('[data-testid="score-message"]').should("contain.text", "score: 6");
    cy.get('[data-testid="maxscore-message"]').should(
      "contain.text",
      "High Score: 6"
    );
  });
});

