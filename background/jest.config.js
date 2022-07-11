/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageReporters: ['html'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
};
