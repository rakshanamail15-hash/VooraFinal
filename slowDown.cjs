const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (stat.isFile() && fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            let changed = false;
            if (content.includes('scrollLeft 60s')) {
                content = content.replace(/scrollLeft 60s/g, 'scrollLeft 180s');
                changed = true;
            }
            if (content.includes('scrollRight 80s')) {
                content = content.replace(/scrollRight 80s/g, 'scrollRight 240s');
                changed = true;
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated CSS in ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Animation speeds updated.');
