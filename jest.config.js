module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  setupFiles: [
    '<rootDir>/config/jest-polyfill.js',
    '<rootDir>/config/enzymeAdapter.js',
  ],
  testMatch: ['<rootDir>/test/**/*.js'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  moduleFileExtensions: ['js', 'json'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
