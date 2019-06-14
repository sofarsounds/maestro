module.exports = {
  testRegex: '/.*\\.test\\.(tsx|ts)$',
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
    '^.+\\.(svg)?$': './src/test/mediaFileMock.ts'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'svg'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./src/test/setupTests.ts']
};
