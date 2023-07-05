const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
    const files = [
        './dist/query/runtime.js',
        './dist/query/polyfills.js',
        './dist/query/main.js'
    ];

    //   await fs.ensureDir('widget');
    await concat(files, 'dist/query/query.js');
    files.forEach(file => {
        fs.remove(file);
    });
}

build();
