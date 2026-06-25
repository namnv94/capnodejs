sap.ui.define([
    "sap/ui/core/library"
], function (coreLibrary) {
    "use strict";

    const { ValueState } = coreLibrary;

    const Formatter = {
        formatPrice(value) {
            return value ? `${value} €` : '';
        }
    };

    return Formatter;
});