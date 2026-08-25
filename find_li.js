const fs = require('fs');
const content = fs.readFileSync('d:\\VOORA02\\src\\pages\\blogContent.jsx', 'utf-8');
const lines = content.split('\n');

let liCount = 0;
let liLine = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // count <li> and </li>
    // Note: this is a simple string match
    const opens = (line.match(/<li[\s>]/g) || []).length;
    const closes = (line.match(/<\/li>/g) || []).length;
    
    for(let j=0; j<opens; j++) {
        liCount++;
        liLine = i + 1; // 1-indexed
    }
    for(let j=0; j<closes; j++) {
        liCount--;
    }
    
    if (line.includes('</ul>')) {
        if (liCount !== 0) {
            console.log(`Unmatched <li> before </ul> at line ${i+1}. Last <li opened at line ${liLine}`);
            liCount = 0; // reset for next list
        }
    }
    if (line.includes('</>')) {
        if (liCount !== 0) {
            console.log(`Unmatched <li> before </> at line ${i+1}. Last <li opened at line ${liLine}`);
            liCount = 0; // reset for next article
        }
    }
}
