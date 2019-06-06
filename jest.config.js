module.exports = {
  moduleFileExtensions: [
    'js',
    // 'jsx',
    // 'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: ['!src/components/ZSlider.vue', 'src/components/*.{js,vue}', '!**/node_modules/**'],
  transformIgnorePatterns: [
    'node_modules/(?!(babel-jest|jest-vue-preprocessor)/)'
  ]
}
