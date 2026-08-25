const fs = require('fs');
const css = `

/* =========================
   SITE PROGRESS
========================= */
.site-progress-section {
  padding: 80px 5%;
  background: #f8fafc;
}

.site-progress-grid {
  column-count: 3;
  column-gap: 20px;
  margin-top: 40px;
}

.site-progress-card {
  break-inside: avoid;
  margin-bottom: 20px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.site-progress-card img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.site-progress-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.site-progress-card:hover img {
  transform: scale(1.05);
}

/* TABLET */
@media (max-width: 992px) {
  .site-progress-grid {
    column-count: 2;
  }
}

/* MOBILE */
@media (max-width: 576px) {
  .site-progress-grid {
    column-count: 1;
  }
  .site-progress-section {
    padding: 60px 20px;
  }
}
`;

fs.appendFileSync('d:/VOORA02/src/pages/VooraOneSea.css', css);
console.log('CSS Appended Successfully');
