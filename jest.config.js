const tsConfig = require('./tsconfig.json');

module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: {
        ...tsConfig.compilerOptions,
        jsx: 'react',
        target: 'es2016',
      },
    },
  },
};
