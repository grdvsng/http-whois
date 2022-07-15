module.exports = {
  collectCoverageFrom: ['!**/node_modules/**', '**/*.{js,ts}'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  roots: ['<rootDir>/src/'],
  testRegex: '/__tests__/.*\\.test\\.ts$',
  transform: { '^.+\\.ts$': 'ts-jest' },
  verbose: true,
};