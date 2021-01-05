/* global describe, it, cy */

describe("Petstagram", function () {
  // it("Para ver si la app funciona", function () {
  //   cy.visit("/");
  // });
  it("Navegamos a una categoria y vemos fotos", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });
});
