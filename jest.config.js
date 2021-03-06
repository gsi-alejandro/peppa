module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./__test__/jest.setup.ts'],
  collectCoverageFrom: ['lib/**/*.js'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
