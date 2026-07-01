sap.ui.define([
  "sap/ui/test/Opa5"
], (Opa5) => {
  "use strict";

  return Opa5.extend("testbooks.test.integration.arrangements.Startup", {

    iStartMyApp() {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "testbooks",
          async: true,
          manifest: true
        }
      });
    }

  });
});