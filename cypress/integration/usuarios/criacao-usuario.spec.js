describe("Usuários", () => {
  beforeEach(() => {
    cy.loginValidUser();

    cy.location("pathname").should("eq", "/users/list");
    cy.contains("Criar usuário", { matchCase: false }).click();
  });

  const newUser = {
    firstName: "João",
    lastName: "Nascimento",
    email: "joão@email.com.br",
    jobTitle: "Empreendedor",
    about: "Texto descritivo sobre o João",
  };

  it("Deve mostrar mensagems de error para dados inválidos no formulário", () => {
    cy.getBySel("submitBtn").click();

    const requiredMessages = [
      "firstName must be at least 4 characters",
      "lastName must be at least 4 characters",
      "email is a required field",
      "jobTitle is a required field",
      "about is a required field",
    ];

    requiredMessages.forEach((message) => {
      cy.contains(message).should("be.visible");
    });

    cy.contains("Criar", { matchCase: false }).click();
  });

  it("Deve cadastrar usuário ao preencher com dados válidos", () => {
    const newUserData = Object.entries(newUser);

    newUserData.forEach((valuePair) => {
      const [key, value] = valuePair;

      cy.getBySel(key).type(value);
    });

    cy.getBySel("submitBtn").click();
    cy.location("pathname").should("contains", "/users/list");

    // valida usuário criado
    cy.contains(`${newUser.firstName} ${newUser.lastName}`).should(
      "be.visible"
    );
  });
});
