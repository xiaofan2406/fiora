module.exports = {
  collectCoverageFrom: ['src/**/*.{js,mjs}', 'test/**/*.{js,mjs}'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jestFrameworkSetup.js',
  testMatch: ['<rootDir>/test/**/*.spec.{js,mjs}'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|mjs)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'mjs', 'json'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
