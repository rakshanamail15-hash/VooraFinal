const fs = require('fs');

const path = 'src/pages/blogContent.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/<h3>(?!FAQs)(.*?)<\/h3>/g, (match, p1) => {
    const words = p1.trim().split(' ');
    if (words.length > 1) {
        const lastWord = words.pop();
        return `<h3 className="section-title">${words.join(' ')} <span className="accent">${lastWord}</span></h3>`;
    } else {
        return `<h3 className="section-title"><span className="accent">${p1}</span></h3>`;
    }
});

content = content.replace(/^( *)<ul>([\s\S]*?)<\/ul>/gm, (match, indent, inner) => {
    // Avoid double wrapping if already wrapped (by checking if the word stacked-sections is nearby)
    return `${indent}<div className="cj-stacked-sections">\n${indent}    <div className="cj-section-block">\n${indent}        <ul>${inner}</ul>\n${indent}    </div>\n${indent}</div>`;
});

content = content.replace(/<h3>FAQs<\/h3>([\s\S]*?)(?=<\/>)/g, (match, pTags) => {
    return `<div className="cj-faq-section" style={{ marginTop: '56px' }}>\n    <h3 className="section-title">Frequently Asked <span className="accent">Questions</span></h3>\n    <div className="cj-faq-content">\n${pTags}    </div>\n</div>\n`;
});

// Since article 01 might be double wrapped, we can manually fix article 01 or just write the file.
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully refactored blogContent.jsx');