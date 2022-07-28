module.exports = {
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  coverageReporters: ['html'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
};
