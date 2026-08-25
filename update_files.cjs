const fs = require('fs');
const files = [
  'd:\\VOORA02\\src\\pages\\VooraAgastya.jsx',
  'd:\\VOORA02\\src\\pages\\VooraWestside.jsx',
  'd:\\VOORA02\\src\\pages\\VooraBeckford.jsx',
  'd:\\VOORA02\\src\\pages\\VooraHighwayHaven.jsx',
  'd:\\VOORA02\\src\\pages\\VooraTechEdge.jsx'
];

const modalJSX = `
      {/* ── Image Popup Modal ── */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            className="vn-image-popup-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setPopupImage(null)}
          >
            <motion.div
              className="vn-image-popup-content"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="vn-image-popup-close" onClick={() => setPopupImage(null)}>
                &times;
              </button>
              <img src={popupImage} alt="Full Article" className="vn-image-popup-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`;

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // 1. Check state
    if (!content.includes('const [popupImage, setPopupImage]')) {
      content = content.replace('const [currentNews, setCurrentNews] = useState(0);', 'const [currentNews, setCurrentNews] = useState(0);\n  const [popupImage, setPopupImage] = useState(null);');
    }

    // 2. Fix button (handle both with and without window.open)
    const oldBtn1 = '<button className="vn-read-btn">Read Full Article <span className="vn-read-arrow">→</span></button>';
    const oldBtn2 = '<button className="vn-read-btn" onClick={() => window.open(featured.image, \'_blank\')}>Read Full Article <span className="vn-read-arrow">→</span></button>';
    const newBtn = '<button className="vn-read-btn" onClick={() => setPopupImage(featured.image)}>Read Full Article <span className="vn-read-arrow">→</span></button>';
    
    content = content.replace(oldBtn1, newBtn).replace(oldBtn2, newBtn);
    
    // 3. Add modal if not present
    if (!content.includes('vn-image-popup-overlay')) {
      content = content.replace(/    <\/div>\s*  \);\s*}\s*$/, modalJSX + '\n}\n');
    }

    fs.writeFileSync(f, content);
  }
});
console.log('Updated all files successfully.');
