#!/usr/bin/env node
// # increment-patch-version
//
// Small utility for incrementing the patch-version of `package.json` in th current directory.
//

let fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
pkg.version = pkg.version.replace(/[.]([^.]*)$/, 
  (_,patch) => `.${+patch + 1}`);
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
