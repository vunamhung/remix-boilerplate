module.exports = {
  printWidth: 152,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['<TYPES>^react', '<TYPES>', '<TYPES>^@', '<BUILTIN_MODULES>', '^react$', '^remix', '<THIRD_PARTY_MODULES>', '^~', '^[.]', '.css$'],
  importOrderTypeScriptVersion: '5.0.0',
  tailwindFunctions: ['cn', 'clsx'],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};
