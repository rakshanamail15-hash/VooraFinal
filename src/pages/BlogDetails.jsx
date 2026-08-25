import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Bookmark, ArrowRight } from 'lucide-react';
import './BlogDetails.css';
const hero2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787203208/blog_bfrnwa.webp';
import { recentArticles } from './Blogs';
import { getBlogContent } from './blogContent';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const BlogDetails = () => {
  const { slug } = useParams();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    setIsSaved(savedArticles.includes(slug));
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleSave = () => {
    let savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    if (isSaved) {
      savedArticles = savedArticles.filter(id => id !== slug);
      setIsSaved(false);
    } else {
      savedArticles.push(slug);
      setIsSaved(true);
    }
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
  };

  // Find article based on ID/slug
  const foundArticle = recentArticles.find((a) => a.issue === slug || a.slug === slug);

  const article = foundArticle ? {
    issue: `Issue ${foundArticle.issue}`,
    category: foundArticle.category,
    title: foundArticle.title,
    description: foundArticle.description,
    date: foundArticle.date,
    readTime: foundArticle.readTime,
    author: 'Editorial Team',
    image: foundArticle.image,
    content: getBlogContent(foundArticle),
  } : {
    issue: `Issue 01`,
    category: 'Not Found',
    title: 'Article Not Found',
    description: 'N/A',
    date: 'N/A',
    readTime: '0 Min Read',
    author: 'System',
    image: hero2,
    content: (
      <p style={{ minHeight: '300px' }}>
        Please return to the journal to browse our available articles.
      </p>
    ),
  };

  return (
    <>
      {/* ── Top Page Banner ── */}
      <section className="about-hero">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url(${hero2})` }}
        />
      </section>

      <div className="cj-details-page">
        <div className="cj-article-container">

          {/* ── Article Main (left-aligned, single column) ── */}
          <main className="cj-article-main">

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <Link to="/blogs" className="cj-kicker" style={{ textDecoration: 'none' }}>
                <ArrowLeft size={14} /> Back to Journal
              </Link>
              <h2 className="cj-article-h2 section-title" style={{ fontSize: '25px' }}>
                {(() => {
                  const manualOverrides = {
                    "Are Apartments Better Than Houses? A Comprehensive Comparison": <>Are Apartments Better Than Houses? <span className="accent">A Comprehensive Comparison</span></>,
                    "Apartments Near DLF IT Park": <>Why Apartments Near DLF IT Park Are in <span className="accent">High Demand?</span></>,
                    "Why Apartments Near DLF IT Park Are in High Demand?": <>Why Apartments Near DLF IT Park Are in <span className="accent">High Demand?</span></>,
                    "Is ECR in Chennai Developing? Growth, Future & Why Voora One Sea Stands Out": <>Is ECR in Chennai Developing? Growth, Future & Why Voora One Sea <span className="accent">Stands Out</span></>,
                    "Best Floor to Live in an Apartment as per Vastu": <>Best Floor to Live in an Apartment as per <span className="accent">Vastu</span></>,
                    "How Residential Land Near SIPCOT Is Attracting Investors": <>How Residential Land Near SIPCOT Is Attracting <span className="accent">Investors</span></>,
                    "Top 5 Reasons to Buy a Sea-Facing Apartment in Chennai’s Tondiarpet": <>Top 5 Reasons to Buy a Sea-Facing Apartment in Chennai’s <span className="accent">Tondiarpet</span></>,
                    "Explore the Benefits of NRI Property Investment in India – Why Chennai Stands Out": <>Explore the Benefits of NRI Property Investment in India – Why Chennai <span className="accent">Stands Out</span></>,
                    "Home Sweet Office: Best Apartments Near Chennai’s IT Hubs – Spotlight on Voora Westside, Ramapuram": <>Home Sweet Office: Best Apartments Near Chennai’s IT Hubs – Spotlight on Voora Westside, <span className="accent">Ramapuram</span></>,
                    "Why ECR Chennai is the Special Destination for Coastal Living and Investment": <>Why ECR Chennai is the Special Destination for Coastal Living and <span className="accent">Investment</span></>,
                    "What Is the Cost of Land & Apartments in ECR, Chennai?": <>What Is the Cost of Land & Apartments in <span className="accent">ECR, Chennai?</span></>,
                    "Why “One Apartment Per Floor Chennai” Is Chennai’s New Gold Standard in Living": <>Why “One Apartment Per Floor Chennai” Is Chennai’s New Gold  <span className="accent">Standard in Living</span></>,
                    "A Tech Professional’s Guide To Buying A Flats In Ramapuram": <>A Tech Professional’s Guide To Buying A Flats In  <span className="accent">Ramapuram</span></>,
                    "Is North Chennai a Good Investment? The City’s Next Real Estate Goldmine": <>Is North Chennai a Good Investment? The City’s Next <span className="accent">Real Estate Goldmine</span></>,
                    "Nungambakkam Vs Adyar: Which Posh Locality In Chennai Is Right For You?": <>Nungambakkam Vs Adyar: Which Posh Locality In Chennai Is <span className="accent">Right For You?</span></>,
                  };

                  if (manualOverrides[article.title]) {
                    return manualOverrides[article.title];
                  }

                  if (!article.title) return null;

                  // 1. Try to split by common punctuation like colon, hyphen, en-dash, or question mark
                  const specialChars = [':', '–', '-', '?'];
                  for (let char of specialChars) {
                    if (article.title.includes(char) && !article.title.endsWith(char)) {
                      const parts = article.title.split(char);
                      // If the second part isn't too long (e.g. less than 7 words), highlight it
                      if (parts.length === 2 && parts[1].trim().split(" ").length <= 7) {
                        return <>{parts[0]}{char} <span className="accent">{parts[1].trim()}</span></>;
                      }
                    }
                  }

                  // 2. Generic fallback: Just highlight the last two words
                  const words = article.title.trim().split(" ");
                  if (words.length <= 2) {
                    return <><span className="accent">{article.title}</span></>;
                  }

                  const lastTwo = words.slice(-2).join(" ");
                  const rest = words.slice(0, -2).join(" ");
                  return <>{rest} <span className="accent">{lastTwo}</span></>;
                })()}
              </h2>
            </motion.div>

            <img src={article.image} alt={article.title} className="cj-hero-image" />

            <article className="cj-article-content">
              {article.content}
            </article>
          </main>

        </div>

        {/* ── Footer / Next Read ── */}
        {/* <section className="cj-next-read">
          <div className="cj-container">
            <h2 className="cj-next-title">
              Explore Issues
            </h2>
            <Link to="/blogs" className="cj-cta-btn">
              Continue Reading <ArrowRight size={18} />
            </Link>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default BlogDetails;