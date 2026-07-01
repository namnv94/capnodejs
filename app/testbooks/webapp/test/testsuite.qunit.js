sap.ui.define(() => {
  "use strict";

  const namespace = "testbooks";
  return {
    name: "QUnit test suite",
    defaults: {
      page: `ui5://test-resources/${namespace}/Test.qunit.html?testsuite={suite}&test={name}`,
      qunit: {
        version: 2
      },
      sinon: {
        version: 4
      },
      ui5: {
        theme: "sap_horizon"
      },
      coverage: {
        only: `${namespace}/`,
        never: [
          `test-resources/${namespace}/`,
          `${namespace}/test/`,
          `${namespace}/localService/`
        ]
      },
      loader: {
        paths: { 
          [namespace]: "../"
        }
      }
    },
    tests: {
      "unit/unitTests": {
        title: "Unit tests"
      },
      "integration/opaTests": {
        title: "Integration tests"
      }
    }
  };
});