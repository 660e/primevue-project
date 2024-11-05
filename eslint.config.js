import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: [
      'auto-imports.d.ts',
      'components.d.ts',
      'eslint.config.js',
      'postcss.config.js',
      'tailwind.config.js',
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
    ],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  skipFormatting,

  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.vue'],
        projectService: true,
      },
    },
    rules: {
      // https://typescript-eslint.io/rules/
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',

      // https://eslint.vuejs.org/rules/
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION', // is, v-is
            'LIST_RENDERING', // v-for
            'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
            'TWO_WAY_BINDING', // v-model
            'RENDER_MODIFIERS', // v-once, v-pre
            'CONTENT', // v-text, v-html
            'SLOT', // slot, v-slot
            'OTHER_DIRECTIVES', // v-custom-directive
            'ATTR_DYNAMIC', // v-bind:prop, :prop
            'EVENTS', // @click, v-on
            'ATTR_STATIC', // prop, custom-prop
            'GLOBAL', // id
            'UNIQUE', // ref, key
            'ATTR_SHORTHAND_BOOL', // boolean-prop
          ],
          alphabetical: true,
        },
      ],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/html-self-closing': ['error', { html: { normal: 'never', void: 'always' } }],
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-empty-component-block': 'error',
      'vue/no-static-inline-styles': ['error'],
      'vue/require-macro-variable-name': [
        'error',
        {
          defineProps: 'props',
          defineEmits: 'emit',
          defineSlots: 'slots',
          useSlots: 'slots',
          useAttrs: 'attrs',
        },
      ],
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
];
