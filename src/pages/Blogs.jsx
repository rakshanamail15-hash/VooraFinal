import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Blogs.css';
const blog1 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787202746/blog1_qn8u9z.webp';
const blog2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203053/blog2_mgt6mi.webp";
const blog3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203057/blog3_oxhjwc.webp";
const blog4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203060/blog4_brcioa.webp";
const blog5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203084/blog5_n6b1tj.webp";
const blog6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787202685/blog6_ihkksu.webp";
const blog7 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203109/blog7_kl6xww.webp";
const blog8 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203106/blog8_orfejm.webp";
const blog9 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203113/blog9_wevlqf.webp";
const blog10 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203116/blog10_rokyws.jpg";
const blog11 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203119/blog11_lvbc2z.jpg";
const blog12 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203123/blog12_pkeayj.webp";
const blog13 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203127/blog13_piluqb.webp";
const blog14 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203131/blog14_yh72xv.webp";
const blog15 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203142/blog15_agcwfp.webp";
const blog16 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203148/blog16_rwsnrb.webp";
const blog17 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203138/blog17_indnbz.webp";
const blog18 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203135/blog18_xdez9t.webp";
const blog19 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203145/blog19_f6n2el.jpg";
const blog20 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203151/blog20_ihhq9t.jpg";
const blog21 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203157/blog21_fnb0hv.webp";
const blog22 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203161/blog22_iav6pi.webp";
const blog23 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203154/blog23_qkjtvu.jpg";
const blog24 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917257/blog24_ratvfm.png";
const blog25 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203164/blog25_dv6omh.jpg";
const blog26 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917262/blog26_kzwxdc.png";
const blog27 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917257/blog27_i7v6oj.png";
const blog28 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203167/blog28_sclkzu.png";
const blog29 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203170/blog29_hcdkqk.jpg";
const blog30 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917258/blog30_jsn56a.png";
const blog31 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203173/blog31_tpyecq.png";
const blog32 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203177/blog32_mjttwx.jpg";
const blog33 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203180/blog33_vnyv8j.jpg";
const blog34 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917260/blog34_xbezo7.png";
const blog35 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787202946/blog35_ldxtx8.jpg";
const blog36 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203186/blog36_hhhb2f.jpg";
const blog37 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917259/blog37_n0bgc1.png";
const blog38 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203189/blog38_arsums.jpg";
const blog39 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203192/blog39_kudmez.jpg";
const blog40 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203183/blog40_c7hr9z.jpg";
const blog41 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203199/blog41_hewxun.jpg";
const blog42 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203196/blog42_milhf4.jpg";
const blog43 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203202/blog43_sntn3o.jpg";
const blog44 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787202877/blog44_exmsza.webp";
const blog45 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917262/blog45_nsgvps.png";
const blog46 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917261/blog46_oiwri8.png";
const blog47 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203205/blog47_ulcovj.jpg";
const blog48 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203212/blog48_ooezlu.jpg";
const blog49 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787203215/blog49_cqie4m.jpg";
const hero2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787203208/blog_bfrnwa.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const recentArticles = [
  {
    slug: "apartments-vs-houses",
    issue: "01",
    category: "Buying Guide",
    title: "Are Apartments Better Than Houses? A Comprehensive Comparison",
    description:
      "In fast-growing cities like Chennai, choosing between an apartment and an independent house is one of the biggest decisions for homebuyers.",
    date: "September 27, 2025",
    readTime: "6 Min Read",
    image: blog1,
  },
  {
    slug: "apartments-near-dlf-it-park",
    issue: "02",
    category: "Location",
    title: "Why Apartments Near DLF IT Park Are in High Demand?",
    description:
      "Discover why professionals, families, and investors are choosing premium apartments near DLF IT Park.",
    date: "September 27, 2025",
    readTime: "5 Min Read",
    image: blog2,
  },
  {
    slug: "ecr-chennai-development",
    issue: "03",
    category: "Investment",
    title: "Is ECR in Chennai Developing? Growth, Future & Why Voora One Sea Stands Out",
    description:
      "Explore the rapid transformation of East Coast Road and why it has become one of Chennai's most desirable investment destinations.",
    date: "September 28, 2025",
    readTime: "7 Min Read",
    image: blog3,
  },

  {
    slug: "ecr-chennai-development",
    issue: "04",
    category: "Vastu",
    title: "Best Floor to Live in an Apartment as per Vastu",
    description:
      "Standing tall above the rest is the hallmark of modern living in Chennai. With luxury towers and",
    date: "September 16, 2025",
    readTime: "7 Min Read",
    image: blog4,
  },

  {
    slug: "ecr-chennai-development",
    issue: "05",
    category: "Vastu",
    title: "How Residential Land Near SIPCOT Is Attracting Investors",
    description:
      "Tamil Nadu’s real estate market is evolving rapidly, and one of the hottest investment corridors is the Residential Land Near SIPCOT",
    date: "September 16, 2025",
    readTime: "7 Min Read",
    image: blog5,
  },

  {
    slug: "ecr-chennai-development",
    issue: "06",
    category: "Vastu",
    title: "Top 5 Reasons to Buy a Sea-Facing Apartment in Chennai’s Tondiarpet",
    description:
      "Chennai is a city that thrives on energy yet longs for moments of calm. Sea-facing apartment in Tondiarpet",
    date: "August 29, 2025",
    readTime: "7 Min Read",
    image: blog6,
  },

  {
    slug: "ecr-chennai-development",
    issue: "07",
    category: "Vastu",
    title: "Explore the Benefits of NRI Property Investment in India – Why Chennai Stands Out",
    description:
      "Invest in premium NRI Property Investment in India Chennai, with Voora. Explore sea-facing apartments,",
    date: "August 24, 2025",
    readTime: "7 Min Read",
    image: blog7,
  },

  {
    slug: "ecr-chennai-development",
    issue: "08",
    category: "Vastu",
    title: "Home Sweet Office: Best Apartments Near Chennai’s IT Hubs – Spotlight on Voora Westside, Ramapuram",
    description:
      "In the fast-paced world of Chennai’s IT sector, where work hours stretch long and commutes eat into",
    date: "August 23, 2025",
    readTime: "7 Min Read",
    image: blog8,
  },

  {
    slug: "ecr-chennai-development",
    issue: "09",
    category: "Vastu",
    title: "Why ECR Chennai is the Special Destination for Coastal Living and Investment",
    description:
      "East Coast Road (ECR) in Chennai has evolved from being just a scenic weekend drive into",
    date: "August 19, 2025",
    readTime: "7 Min Read",
    image: blog9,
  },

  {
    slug: "ecr-chennai-development",
    issue: "10",
    category: "Vastu",
    title: "What Is the Cost of Land & Apartments in ECR, Chennai?",
    description:
      "Cost of Land & Apartments in ECR Chennai is one of the most scenic stretches in South India, known for its pristine beaches, relaxed lifestyle,",
    date: "August 19, 2025",
    readTime: "7 Min Read",
    image: blog10,
  },

  {
    slug: "ecr-chennai-development",
    issue: "11",
    category: "Vastu",
    title: "Why “One Apartment Per Floor Chennai” Is Chennai’s New Gold Standard in Living",
    description:
      "In Chennai’s evolving luxury real estate market, exclusivity, space, and privacy are key. That’s why “one apartment per floor chennai",
    date: "August 5, 2025",
    readTime: "7 Min Read",
    image: blog11,
  },

  {
    slug: "ecr-chennai-development",
    issue: "12",
    category: "Vastu",
    title: "A Tech Professional’s Guide To Buying A Flats In Ramapuram",
    description:
      "For today’s tech professionals, a home isn’t just a place to sleep—it’s your workspace, relaxation zone, and the heart of your lifestyle. Located close to",
    date: "August 5, 2025",
    readTime: "7 Min Read",
    image: blog12,
  },

  {
    slug: "ecr-chennai-development",
    issue: "13",
    category: "Vastu",
    title: "Is North Chennai a Good Investment? The City’s Next Real Estate Goldmine",
    description:
      "Is North Chennai a good investment? Discover why this emerging hotspot is becoming the next real estate goldmine for smart property buyers.",
    date: "August 29, 2025",
    readTime: "7 Min Read",
    image: blog13,
  },

  {
    slug: "ecr-chennai-development",
    issue: "14",
    category: "Vastu",
    title: "Nungambakkam Vs Adyar: Which Posh Locality In Chennai Is Right For You?",
    description:
      "Nungambakkam or Adyar? The elite vibe or coastal calm? If you're choosing a prime residential spot in Chennai, these two iconic localities top the list",
    date: "August 29, 2025",
    readTime: "7 Min Read",
    image: blog14,
  },

  {
    slug: "ecr-chennai-development",
    issue: "15",
    category: "Vastu",
    title: "Is Now The Right Time To Buy A Home Near The Beach In Chennai?",
    description:
      "Chennai’s scenic coastline is gaining momentum among homebuyers, but is this the right time to invest in a beachside property? With growing infrastructure, lifestyle upgrades,",
    date: "August 29, 2025",
    readTime: "7 Min Read",
    image: blog15,
  },

  {
    slug: "ecr-chennai-development",
    issue: "16",
    category: "Vastu",
    title: "5 Reasons Living on ECR Chennai Is More Than Just A Weekend Getaway (It’s A Lifestyle Investment)",
    description:
      "Ever dreamed of waking up to the sound of waves? For Chennaiites, East Coast Road (ECR) is no longer just about weekend beach drives",
    date: "July 24, 2025",
    readTime: "7 Min Read",
    image: blog16,
  },

  {
    slug: "ecr-chennai-development",
    issue: "17",
    category: "Vastu",
    title: "The Investor’s Guide to DTCP Approved Plots on the Chennai-Bangalore Highway",
    description:
      "Looking to invest in land with solid returns and legal safety? DTCP approved plots on the Chennai-Bangalore Highway offer both. This guide covers everything you",
    date: "July 20, 2025",
    readTime: "7 Min Read",
    image: blog17,
  },

  {
    slug: "ecr-chennai-development",
    issue: "18",
    category: "Vastu",
    title: "Apartment vs Independent House in Nungambakkam: Which Suits Urban Living ?",
    description:
      "What makes this Indian city such a majestic place to live and thrive is its strong cultural roots, which have only grown stronger with the",
    date: "July 15, 2025",
    readTime: "7 Min Read",
    image: blog18,
  },

  {
    slug: "ecr-chennai-development",
    issue: "19",
    category: "Vastu",
    title: "Top 5 Features to Look for in a Luxury Apartment in Nungambakk",
    description:
      "there are countless factors you must consider before buying a luxury apartment in Nungambakkam. This blog will outline the top five features to look for",
    date: "July 10, 2025",
    readTime: "7 Min Read",
    image: blog19,
  },

  {
    slug: "ecr-chennai-development",
    issue: "20",
    category: "Vastu",
    title: "Emerging Plots Near Kanchipuram Locations That Are Worth Your Money",
    description:
      "Kanchipuram is gaining rapid attention from real estate investors due to its strategic location, strong infrastructure, and cultural heritage. With the Chennai-Bengaluru Highway (NH48) and",
    date: "July 8, 2025",
    readTime: "7 Min Read",
    image: blog20,
  },

  {
    slug: "ecr-chennai-development",
    issue: "21",
    category: "Vastu",
    title: "Land Investment vs. Apartment Purchase: What Works Better in 2025?",
    description:
      "Plot or flat Which is better? — If this question has been bouncing around in your mind, you’re not alone. 2025 is shaping up to",
    date: "July 4, 2025",
    readTime: "7 Min Read",
    image: blog21,
  },








  {
    slug: "apartments-vs-houses",
    issue: "22",
    category: "Buying Guide",
    title: "Buying a Home in the Heart of Chennai: Is Apartments in Nungambakkam Right for You?",
    description: "With Chennai's real estate market booming, one neighbourhood consistently stands out: Nungambakkam. Known for its premium positioning, rich heritage, and exceptional connectivity, this central location	",
    date: "July 2, 2025",
    readTime: "6 Min Read",
    image: blog22,
  },
  {
    slug: "apartments-near-dlf-it-park",
    issue: "23",
    category: "Location",
    title: "Why is North Chennai Emerging as a Hotspot for Affordable Housing?",
    description: "					With rising real estate prices across Chennai, affordable housing is becoming increasingly difficult to find in central and southern regions. However, North Chennai is now				",
    date: "September 30, 2025",
    readTime: "5 Min Read",
    image: blog23,
  },
  {
    slug: "ecr-chennai-development",
    issue: "24",
    category: "Investment",
    title: "Top Reasons to Invest in Residential Plots at Voora Highway Haven",
    description: "Buying a residential plot is a significant investment that demands thorough planning and insight. In this blog, we highlight compelling reasons to consider purchasing a				",
    date: "July 30, 2025",
    readTime: "7 Min Read",
    image: blog24,
  },

  {
    slug: "ecr-chennai-development",
    issue: "25",
    category: "Vastu",
    title: "Launching Today: A New Landmark On ECR—Welcome To Voora One Sea",
    description: "Are you willing to upgrade your life? Live the high life at Voora One Sea, Kanathur, ECR. Voora One Sea embodies coastal luxury by fusing	",
    date: "July 15, 2025",
    readTime: "7 Min Read",
    image: blog25,
  },

  {
    slug: "ecr-chennai-development",
    issue: "26",
    category: "Vastu",
    title: "ECR vs OMR: Which Is Better for Buying a Premium Apartment?",
    description: "Real estate is a realm of tight competition. Many projects by many builders are going up for development across the nation. Currently, one of the				",
    date: "July 13, 2025",
    readTime: "7 Min Read",
    image: blog26,
  },

  {
    slug: "ecr-chennai-development",
    issue: "27",
    category: "Vastu",
    title: "Is It Worth Buying a Beachfront Apartment in Chennai? ECR",
    description:
      "Beachfront apartments are always in great demand in Chennai. There are many benefits to owning a beachfront apartment in Chennai. The closeness to nature and				",
    date: "June 5, 2025",
    readTime: "7 Min Read",
    image: blog27,
  },

  {
    slug: "ecr-chennai-development",
    issue: "28",
    category: "Vastu",
    title: "Why ECR is Chennai’s Most Desirable Coastal Properties in Chennai Residential Zone ",
    description: "Coastal residential zones are attractive options for residential buyers due to their affinity to the sea. ECR is in growing demand as a coastal residential",
    date: "May 28, 2025",
    readTime: "7 Min Read",
    image: blog28,
  },

  {
    slug: "ecr-chennai-development",
    issue: "29",
    category: "Vastu",
    title: "What Sets Voora Sea View Apartments Apart From Other Seaside Residences?",
    description: "Nowhere else will you find the perfect balance between luxury, comfort, and breathtaking views.Voora Sea View Apartments offer a truly unmatched living experience by the				",
    date: "May 8, 2025",
    readTime: "7 Min Read",
    image: blog29,
  },

  {
    slug: "ecr-chennai-development",
    issue: "30",
    category: "Vastu",
    title: "A Document Checklist For NRIs Buying A Property In Chennai",
    description: "Chennai, with its rich cultural heritage and thriving economy, has emerged as a top destination for Non-Resident Indians (NRIs) seeking to invest in real estate.				",
    date: "May 4, 2025",
    readTime: "7 Min Read",
    image: blog30,
  },

  {
    slug: "ecr-chennai-development",
    issue: "31",
    category: "Vastu",
    title: "The Benefits of Living in a Gated Community",
    description: "Finding a home that offers security, privacy, and community is a top priority for many homebuyers. Benefits of Living in a Gated Community have gained				",
    date: "April 29, 2025",
    readTime: "7 Min Read",
    image: blog31,
  },

  {
    slug: "ecr-chennai-development",
    issue: "32",
    category: "Vastu",
    title: "8 Reasons Why Investors Are Eyeing Voora Sea View Apartments in ECR",
    description: "In your mind, have you ever thought about staking a claim in one of the finest real estate developments in all of Chennai? ECRs Voora",
    date: "April 8, 2025",
    readTime: "7 Min Read",
    image: blog32,
  },

  {
    slug: "ecr-chennai-development",
    issue: "33",
    category: "Vastu",
    title: "Why Is Voora Sea View Apartments In ECR The Talk Of Chennai’s Real Estate Market?",
    description:
      "Buying properties is hardly a task in today's bustling world of real estate. The Voora Sea View Apartments in Chennai have not only stood out				",
    date: "April 2, 2025",
    readTime: "7 Min Read",
    image: blog33,
  },

  {
    slug: "ecr-chennai-development",
    issue: "34",
    category: "Vastu",
    title: "10 Features That Make Voora Sea View Apartments in ECR Stand Out",
    description: "If you happen to be one person searching for that perfect hint of luxury, calmness, and breathtaking views, then Features of Sea View Apartments in				",
    date: "March 30, 2025",
    readTime: "7 Min Read",
    image: blog34,
  },

  {
    slug: "ecr-chennai-development",
    issue: "35",
    category: "Vastu",
    title: "Why should you buy an apartment in Chennai?",
    description: "Chennai, known as the Detroit of India, has emerged as a prime destination for real estate investments. With a thriving economy, expanding infrastructure, and increasing				",
    date: "March 10, 2025",
    readTime: "7 Min Read",
    image: blog35,
  },

  {
    slug: "ecr-chennai-development",
    issue: "36",
    category: "Vastu",
    title: "Benefits Of Buying Under-Construction Apartments In Chennai",
    description: "Buying a home is a major financial decision, often leading to a dilemma between choosing a ready-to-move-in apartment or an under-construction property. Under-construction apartments are				",
    date: "March 5, 2025",
    readTime: "7 Min Read",
    image: blog36,
  },

  {
    slug: "ecr-chennai-development",
    issue: "37",
    category: "Vastu",
    title: "A Property Document Checklist for Buying a Home in Chennai",
    description:
      "Buying property in Chennai is a significant investment that requires thorough legal verification. Ensuring all necessary documents are in place helps safeguard your ownership rights				",
    date: "March 3, 2025",
    readTime: "7 Min Read",
    image: blog37,
  },

  {
    slug: "ecr-chennai-development",
    issue: "38",
    category: "Vastu",
    title: "Common Mistakes to Avoid Investing in Real Estate",
    description: "Real estate is one of the most reliable ways to build long-term wealth, offering steady returns and financial security. However, many investors make crucial mistakes				",
    date: "February 28, 2025",
    readTime: "7 Min Read",
    image: blog38,
  },

  {
    slug: "ecr-chennai-development",
    issue: "39",
    category: "Vastu",
    title: "5 Best Place to Invest in Chennai That Are Excellent for Real Estate Investment",
    description: "Are you considering investing in Chennai’s booming real estate market but unsure where to begin? Choosing the right property can be just as challenging as				",
    date: "February 27, 2025",
    readTime: "7 Min Read",
    image: blog39,
  },

  {
    slug: "ecr-chennai-development",
    issue: "40",
    category: "Vastu",
    title: "Top 10 Reasons Why NRI Invest in Chennai",
    description:
      "Looking to invest in Chennai’s real estate market? As one of India’s fastest-growing metropolitan cities, Chennai offers lucrative opportunities for Non-Resident Indians (NRIs) seeking long-term",
    date: "February 26, 2025",
    readTime: "7 Min Read",
    image: blog40,
  },

  {
    slug: "ecr-chennai-development",
    issue: "41",
    category: "Vastu",
    title: "What is CMDA Approval and Why It’s Crucial for Buying Plots in Chennai",
    description:
      "Are you planning to buy land in Chennai? Ensuring CMDA (Chennai Metropolitan Development Authority) approval is the key to a hassle-free and legally secure investment.				",
    date: "February 25, 2025",
    readTime: "7 Min Read",
    image: blog41,
  },

  {
    slug: "ecr-chennai-development",
    issue: "42",
    category: "Vastu",
    title: "Understanding Home Buying Process Floor Plans: What Works Best for You ?",
    description:
      "Choosing the right apartment floor plan is crucial for ensuring comfort, convenience, and long-term value. A well-designed floor plan optimizes space usage, enhances natural light				",
    date: "February 17, 2025",
    readTime: "7 Min Read",
    image: blog42,
  },












  {
    slug: "ecr-chennai-development",
    issue: "43",
    category: "Vastu",
    title: "Top 10 Tips For Land Buyer Should Consider",
    description: "Purchasing land is one of the most significant financial decisions you can make. Whether you’re buying land for residential, commercial, or agricultural purposes, it’s crucial",
    date: "February 11, 2025",
    readTime: "7 Min Read",
    image: blog43,
  },

  {
    slug: "ecr-chennai-development",
    issue: "44",
    category: "Vastu",
    title: "Voora Group Launches Exclusive Residential Plots in Kanchipuram, Panapakkam",
    description: "Chennai, February 2025 – Voora Group, a leading real estate developer in Chennai, with 30 years of expertise, 50+ completed projects, 6,000+ happy families, and",
    date: "February 3, 2025",
    readTime: "7 Min Read",
    image: blog44,
  },

  {
    slug: "ecr-chennai-development",
    issue: "45",
    category: "Vastu",
    title: "5 Must-Have Amenities in Every Luxury Apartment",
    description: "When it comes to luxury apartment living, the amenities offered can elevate your lifestyle and enhance your day-to-day experiences.In this blog, we explore the top",
    date: "February 28, 2025",
    readTime: "7 Min Read",
    image: blog45,
  },

  {
    slug: "ecr-chennai-development",
    issue: "46",
    category: "Vastu",
    title: "How to Find the Ideal Apartment in Chennai: Key Considerations",
    description:
      "Purchasing land is one of the most significant financial decisions you can make. Whether you’re buying land for residential, commercial, or agricultural purposes, it’s crucial",
    date: "February 11, 2025",
    readTime: "7 Min Read",
    image: blog46,
  },

  {
    slug: "ecr-chennai-development",
    issue: "47",
    category: "Vastu",
    title: "Tips for Finding the Perfect Homes",
    description:
      "Buying a home and investing money in real estate is one of the big task in everyone’s lives. This is a conclusion that nobody can",
    date: "January 4, 2025",
    readTime: "7 Min Read",
    image: blog47,
  },

  {
    slug: "ecr-chennai-development",
    issue: "48",
    category: "Vastu",
    title: "The Top 5 Mistakes Home Buyers Make",
    description:
      "In today’s times, it is quite tough and intimidating to buy a house, especially for first-time home buyers.",
    date: "November 23, 2025",
    readTime: "7 Min Read",
    image: blog48,
  },

  {
    slug: "ecr-chennai-development",
    issue: "49",
    category: "Vastu",
    title: "Buying a Home is an Emotional Journey.",
    description:
      "Renting requires ongoing payments, which can be tough during job loss. This makes owning a home a more secure choice.",
    date: "October 29, 2025",
    readTime: "7 Min Read",
    image: blog49,
  },


];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  const totalPages = Math.ceil(recentArticles.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = recentArticles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (


    <section className="hj-section">
      <div className="hj-container">
        {/* ── Hero ── */}
        <section className="about-hero">
          <div
            className="hero-bg-image"
            style={{ backgroundImage: `url(${hero2})` }}
          />
        </section>

        {/* ── Latest Articles Grid ── */}
        <section className="hj-grid-container">
          <div className="hj-grid">
            {currentArticles.map((article, i) => (
              <motion.div
                key={article.issue}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                className="hj-card-wrapper"
              >
                <Link to={`/blogs/${article.issue}`} className="hj-card">
                  <div className="hj-card-image-wrap">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="hj-card-body">
                    <span className="hj-card-cat">{article.category}</span>
                    <h3 className="hj-card-title">{article.title}</h3>
                    <p className="hj-card-desc">{article.description}</p>
                    <div className="hj-card-meta">
                      <span className="hj-meta-text">{article.date} · {article.readTime}</span>
                      <span className="hj-read-more">
                        Read Article <ArrowUpRight size={16} className="hj-arrow-icon" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="cj-pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="cj-page-btn"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`cj-page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="cj-page-btn"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Blog;