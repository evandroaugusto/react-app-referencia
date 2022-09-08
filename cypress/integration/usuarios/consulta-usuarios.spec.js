import USERS from "../../../src/features/users/api/mock/usersData.mock";

describe("Usuários", () => {
  beforeEach(() => {
    cy.loginValidUser();

    cy.location("pathname").should("eq", "/users/list");
  });

  it("Deve exibir lista de usuários conforme retorno da api", () => {
    // captura dados mockados para simular intercept na API
    USERS.forEach((user) => {
      cy.contains(`${user.first_name} ${user.last_name}`).should("be.visible");
    });
  });

  it("Deve acessar página de detalhe do usuário e validar informações", () => {
    const user = USERS[0];

    cy.getBySel(`user-${user.id}`)
      .contains("Ver usuário", {
        matchCase: false,
      })
      .click();

    cy.location("pathname").should("contain", "/users/detail");

    // eslint-disable-next-line camelcase
    const { first_name, last_name, job_title, gender, email } = user;

    // eslint-disable-next-line camelcase
    [first_name, last_name, job_title, gender, email].forEach((value) => {
      cy.contains(value).should("be.visible");
    });

    cy.contains("Voltar", { matchCase: false }).click();

    cy.location("pathname").should("contain", "/users/list");
  });
});
