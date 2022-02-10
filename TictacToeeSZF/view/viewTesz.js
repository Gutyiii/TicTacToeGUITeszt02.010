$(function () {

    const { test } = QUnit;
    let tomb = [];
    let infoPanle = new InfoView();

    QUnit.module('felület', function (h) {
        h.before(() => {
            tomb = [];
            const tesztController = new TTTController();
            const jatekter = new JatekterView(tomb, $("#qunit-fixture"));
        });
        test("létezik-e a játéktér", function (assert) {
            for (let index = 0; index < 9; index++) {
                assert.ok(tomb[index].Elem, "létezik");
                assert.ok(tomb[index].pElem, "létezik");
            }
        });
        test("ha rákattintunk az x-re vagy az o-ra", function (assert) {
            for (let index = 0; index < 9; index++) {
                tomb[index].Elem.click();
                if (index % 2 == 0) {
                    assert.equal(tomb[index].aktiv, false);
                    assert.equal(tomb[index].pElem.html(), "X");
                    assert.equal(tomb[index].ertek, "X");
                } else {
                    assert.equal(tomb[index].aktiv, false);
                    assert.equal(tomb[index].pElem.html(), "O");
                    assert.equal(tomb[index].ertek, "O");
                }
            }
        });
    });
    QUnit.module('infoPanel', function (h) {
        h.before(() => {
            tomb = [];
            const jatekter = new JatekterView(tomb, $("#qunit-fixture"));
        });
        test("aktív infopanelre kiírás", function (assert) {
            for (let index = 0; index < 9; index++) {
                tomb[index].Elem.click();
                if (index % 2 == 0) {
                    assert.equal(infoPanle.getXjatekos() + " következik", "Xman következik");
                } else {
                    assert.equal(infoPanle.getOjatekos() + " következik", "Oman következik");
                }
            }
        });


    });
});