var glob = require('glob');
const fs = require('fs-extra');

// Copies all non .ts / .tsx / .js / .jsx files and moves them to the dist and dist-es directory
glob(
  'src/**/*.*',
  {
    ignore: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.test.tsx.snap']
  },
  function(err, files) {
    // Copy files to dist directory

    files.map(file => {
      const pathName = 'dist/' + file.replace('src/', '');
      fs.copy(file, pathName).catch(err => console.error(err));
    });

    // Copy files to dist-es directory
    files.map(file => {
      const pathName = 'dist-es/' + file.replace('src/', '');
      fs.copy(file, pathName).catch(err => console.error(err));
    });
  }
);
