const assert = require("assert");

function somme(nombre1 = 0, nombre2 = 0) {
  if (typeof nombre1 !== "number" || typeof nombre2 !== "number") {
    throw new Error("paramètre invalide");
  }
  return nombre1 + nombre2;
}

describe("somme()", function () {
  it("Avec aucun paramètre, la fonction somme() est sensée retourner la valeur 0", function () {
    assert.equal(somme(), 0);
  });

  it("Avec les valeurs de paramètres 2 et 3, la fonction somme() est sensée retourner la valeur 5", function () {
    assert.strictEqual(somme(2, 3), 5);
  });

  it("Avec les valeurs de paramètres -1 et 4, la fonction somme() est sensée retourner la valeur 3", function () {
    assert.strictEqual(somme(-1, 4), 3);
  });

  it("Avec les valeurs de paramètres 5 et 'a', la fonction somme() est sensée lever une exception avec le message \"paramètre invalide\"", function () {
    assert.throws(() => somme(5, "a"), Error, "paramètre invalide");
  });
});
