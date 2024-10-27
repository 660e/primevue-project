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
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  skipFormatting,

  {
    rules: {
      // https://eslint.org/docs/latest/rules/
      'no-var': 'error',
      'prefer-const': 'error',

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
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/html-self-closing': ['error', { html: { normal: 'never', void: 'always' } }],
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
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
