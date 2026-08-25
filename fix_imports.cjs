const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (file.endsWith('.jsx')) {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(/from\s+['"]\.\/assets\//g, "from '../assets/image/");
            content = content.replace(/from\s+['"]\.\/Video\/oneseavideo1\.mp4['"]/g, "from '../assets/image/videos/oneseavideo1.mp4'");
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated imports in ${file}`);
        }
    });
});
