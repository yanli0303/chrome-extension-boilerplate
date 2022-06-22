const fs = require('fs-extra');
const path = require('path');

const ROOT_DIR = __dirname;
const dist = path.join(ROOT_DIR, 'dist');
fs.mkdir(dist);

['background', 'content-script', 'options', 'popup'].forEach((folder) => {
  const src = path.join(ROOT_DIR, '..', folder, 'dist');
  const dest = path.join(dist, folder);
  fs.copy(src, dest);
});

fs.copy(path.join(ROOT_DIR, 'images'), path.join(dist, 'images'));
fs.copy(path.join(ROOT_DIR, 'manifest.json'), path.join(dist, 'manifest.json'));
