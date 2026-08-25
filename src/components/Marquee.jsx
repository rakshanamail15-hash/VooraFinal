const newsData = [
  { title: "Luxury Villas" },
  { title: "Commercial Projects" },
  { title: "Prime Locations" },
  { title: "Architecture Excellence" },
  { title: "Quality Construction" },
  { title: "Trusted Developer" },
  { title: "Premium Amenities" },
  { title: "On-Time Delivery" },
];

export default function Marquee() {
  return (
    <div className="vn-wall">
      <div className="vn-wall-track">
        {[...newsData, ...newsData].map((item, idx) => (
          <span key={idx} className="vn-wall-item">
            <span className="vn-wall-bullet" />
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
}