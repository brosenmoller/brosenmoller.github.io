import fs from 'fs';

// Path to the source index.html file
const sourcePath = './dist/index.html';

// Path to the destination 404.html file
const destinationPath = './dist/404.html';

// Copy index.html to 404.html
fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) throw err;
    console.log('File was copied to destination');
});
