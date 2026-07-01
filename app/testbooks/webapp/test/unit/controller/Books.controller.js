sap.ui.define([
	"testbooks/controller/Books.controller"
], (BooksController) => {
	"use strict";

  let oBooksController;

	QUnit.module("Books.controller.js", {
		beforeEach() {
			oBooksController = new BooksController();
		},
		afterEach() {
			oBooksController.destroy();
		}
	});

  QUnit.test("onInit", (assert) => {
    assert.strictEqual(oBooksController.onInit(), undefined);
  });

});