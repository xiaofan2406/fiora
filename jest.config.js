module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}', 'test/**/*.{ts,tsx}'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jestFrameworkSetup.js',
  testMatch: ['<rootDir>/test/**/*.spec.{ts,tsx,js,mjs}'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx|js|mjs)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'json'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
