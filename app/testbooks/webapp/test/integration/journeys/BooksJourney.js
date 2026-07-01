sap.ui.define([
  "sap/ui/test/opaQunit",
  "../pages/Books"
], function (opaTest) {
  "use strict";

  QUnit.module("onSelectionChange");

  opaTest("Should see MessageToast", function (Given, When, Then) {
    // Arrangements
    Given.iStartMyApp();

    //Actions
    When.onThePage.iPressOnAnItem();

    // Assertions
    Then.onThePage.thePageShouldShowMessageToast();

    // Cleanup
    Then.iTeardownMyApp();
  });

});
