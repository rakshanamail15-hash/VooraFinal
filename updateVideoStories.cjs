const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('className="vs-track"')) {
                // Extremely naive but safe replacement if we target the entire known block
                // We will just replace the vs-gallery inner div with the VideoCarousel component
                let changed = false;
                // Find <div className="vs-track" / className='vs-track'
                // It might be formatted differently. Let's use regex.
                const trackRegex = /<div[\s\n]*className="vs-track"[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

                content = content.replace(/<div[\s\n]*className="vs-track"[\s\S]*?(?:shortsVideos1|shortsVideos)\.map\(([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, (match, p1) => {
                    changed = true;
                    let arrName = match.includes('shortsVideos1') ? 'shortsVideos1' : 'shortsVideos';
                    let titleName = match.includes('videoTitles1') ? 'videoTitles1' : 'videoTitles';
                    return `<VideoCarousel videos={${arrName}} titles={${titleName}} />\n          </div>\n        </div>\n      </section>`;
                });

                if (changed && !content.includes('import VideoCarousel')) {
                    content = `import VideoCarousel from "../components/VideoCarousel";\n` + content;
                }

                if (changed) {
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`Updated ${fullPath}`);
                }
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Done scanning.');
