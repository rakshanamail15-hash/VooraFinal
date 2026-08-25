import "./HeroRibbon.css";
import { Link } from "react-router-dom";
const vooraone = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917320/oneseaRibbon_bxxrf3.png";
const vooraagastya = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785923335/AgastyaRibbon_trwsxv.jpg";
const voorabeckford = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787062984/BeckfordRibbon_2_th5lhv.jpg";
const vooraweside = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917400/westsideRibbon_pod2hf.jpg";
const voorahaven = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917282/highwayheaven_amenities_hp3nk2.jpg";
const vooratechedge = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786011239/tech-edgeRibbon_ytnaqj.jpg"

const ribbonProjects = [
    {
        image: vooraone,
        title: "Voora One Sea",
        link: "/voora-one-sea"
    },
    {
        image: vooraagastya,
        title: "Voora Agastya",
        link: "/voora-agastya"
    },
    {
        image: vooraweside,
        title: "Voora Westside",
        link: "/voora-westside"
    },
    {
        image: voorabeckford,
        title: "Voora Beckford",
        link: "/voora-beckford"
    },
    {
        image: voorahaven,
        title: "Voora Highway Haven",
        link: "/voora-highway-haven"
    },
    // {
    //     image: vooratblock,
    //     title: "Voora Vidyasagar Oswal Garden T_Block",
    //     link: "/voora-vidyasagar-oswal-gardens-t-block"
    // },
    // {
    //     image: vooraocean27,
    //     title: "Voora Ocean27",
    //     link: "/voora-oceans27"
    // },
    {
        image: vooratechedge,
        title: "Voora Tech Edge",
        link: "/voora-tech-edge"
    },
];

export default function RibbonGallery() {
    return (
        <section className="rg-section">
            <div className="rg-marquee">
                <div className="rg-track">
                    {[...ribbonProjects, ...ribbonProjects].map((item, index) => (
                        <Link to={item.link} className="rg-card" key={index} onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="rg-image-box">
                                <img src={item.image} alt={item.title} className="rg-image" />
                            </div>

                            <div className="rg-info">
                                <h3 className="rg-title">{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}