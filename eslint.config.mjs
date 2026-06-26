import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import fioriTools from '@sap-ux/eslint-plugin-fiori-tools';
import cds from '@sap/cds/eslint.config.mjs';
import cdsPlugin from '@sap/eslint-plugin-cds';

export default [
  // Ignore generated folders
  {
    ignores: [
      'node_modules/**',
      'gen/**',
      'dist/**',
      'coverage/**',
      '.cds-services/**',
      'app/**/node_modules/**',
      'app/**/dist/**',
      'tmp/**'
    ]
  },

  // JavaScript files
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules,

      'no-console': 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },

  // TypeScript files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      },
      globals: {
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],

      '@typescript-eslint/no-floating-promises': 'error'
    }
  },

  // CAP service handlers
  {
    files: ['srv/**/*.{js,ts}'],
    rules: {
      'no-console': 'off'
    }
  },

  ...cds.recommended,
  cdsPlugin.configs.recommended,
  ...fioriTools.configs.recommended
];
