module.exports = {
  roots: [`<rootDir>`],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist/*/'
  ],
  testRegex: `(./.*/__tests__/.*|\\.(test|spec))\\.tsx?$`,
  modulePaths: [`<rootDir>/src/`],
  rootDir: './',
  moduleDirectories: ['node_modules'],
}
