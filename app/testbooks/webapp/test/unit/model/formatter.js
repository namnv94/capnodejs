/*global QUnit */
sap.ui.define([
  'testbooks/model/formatter'
], function (Formatter) {
  "use strict";

  QUnit.module("formatter");

  QUnit.test("formatPrice", function (assert) {
    assert.strictEqual(Formatter.formatPrice(10), "10 €", "formatPrice(10) > 10 €");
    assert.strictEqual(Formatter.formatPrice(null), "", "formatPrice(null) > '' ");
  });

});