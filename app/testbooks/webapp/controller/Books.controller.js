sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    'testbooks/model/formatter',
], (Controller, MessageToast, Formatter) => {
    "use strict";

    return Controller.extend("testbooks.controller.Books", {
        formatter: Formatter,

        onInit() {
        },

        onSelectionChange(event) {
            MessageToast.show('Book selected');
        }
    });
});