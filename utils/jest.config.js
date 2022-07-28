module.exports = {
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  coverageReporters: ['html'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
};
