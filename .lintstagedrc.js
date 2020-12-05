module.exports = {
  '*.{css,json,md}': ['prettier --write'],
  '*.{js,ts,tsx}': [
    'jest --findRelatedTests',
    'eslint --fix',
    'prettier --write',
  ],
  '*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
