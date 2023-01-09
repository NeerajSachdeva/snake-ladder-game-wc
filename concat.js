const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/sl-game-wc/runtime.js',
    './dist/sl-game-wc/polyfills.js',
    './dist/sl-game-wc/main.js'
  ];

  await fs.ensureDir('publish');
  await concat(files, 'publish/sl-game-wc.js');
})();