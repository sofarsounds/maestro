module.exports = {
  testRegex: '/.*\\.test\\.(tsx|ts)$',
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./test/setupTests.ts']
};
