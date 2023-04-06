module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
    },
    collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
    roots: ['<rootDir>'],
    testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  };
  