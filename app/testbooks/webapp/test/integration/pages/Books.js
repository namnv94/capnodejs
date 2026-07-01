sap.ui.define([
  'sap/ui/test/Opa5',
  'sap/ui/test/matchers/AggregationLengthEquals',
  'sap/ui/test/matchers/I18NText',
  'sap/ui/test/actions/Press'
],
  function (
    Opa5,
    AggregationLengthEquals,
    I18NText,
    Press
  ) {
    "use strict";

    const sViewName = "testbooks.view.Books", sTableId = "mytable";

    Opa5.createPageObjects({
      onThePage: {

        actions: {
          iPressOnAnItem: function () {
            return this.waitFor({
              id: sTableId,
              viewName: sViewName,
              actions:[ (oTable) => {
                const oItem = oTable.getItems()[0];
                new Press().executeOn(oItem);
              }],
              errorMessage: "The table does not have a trigger."
            });
          }
        },

        assertions: {
          thePageShouldShowMessageToast: function () {
            return this.waitFor({
              check: function () {
                return document.querySelector(".sapMMessageToast") !== null;
              },
              success: function () {
                Opa5.assert.ok(true, "The MessageToast is shown");
              },
              errorMessage: "Expected MessageToast was not shown"
            });
          },
        }
        
      }
    });
  });
