module.exports = {
  moduleDirectories: ['src', 'node_modules'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!.*/.*)'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.stories.js', '!src/services/*.js'],
  setupFiles: ['./src/setupTests.js'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/mocks/css.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/image.js',
  },
  coverageReporters: ['html', 'json', 'text', 'text-summary'],
  // testMatch: ['**/__test__/components/ModalGroup/**/*.[jt]s?(x)'],
  coverageThreshold: {
    global: {
      branches: 23,
      functions: 23.5,
      lines: 40,
      statements: 39.5,
    },
  },
}
