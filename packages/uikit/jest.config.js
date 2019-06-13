module.exports = {
  testRegex: '/.*\\.test\\.(tsx|ts)$',
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'svg'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./src/test/setupTests.ts']
};
