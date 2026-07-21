export default {
  lint: {
    extends: ['recommended'],

    rules: {
      /*
       * XML Views
       */
      'xml-unused-namespaces': 'warn',
      'xml-duplicate-ids': 'error',

      /*
       * JavaScript
       */
      'no-hardcoded-urls': 'warn',
      'no-global-functions': 'warn',

      /*
       * Manifest
       */
      'manifest-sapui5-dependencies': 'warn',

      /*
       * Internationalization
       */
      'no-hardcoded-text': 'warn',

      /*
       * General
       */
      'no-sync-ajax': 'error'
    }
  }
};
