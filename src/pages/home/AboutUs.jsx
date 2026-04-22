import securityIcon from "../../assets/icons/security.svg";
import carIcon from "../../assets/icons/car.svg";
import peopleIcon from "../../assets/icons/people.svg";

function AboutUs() {
  const features = [
    {
      id: 1,
      icon: "🚗",
      title: "Premium Fleet",
      desc: "Experience the ultimate driving pleasure with our curated collection of high-end and luxury vehicles.",
    },
    {
      id: 2,
      icon: "💎",
      title: "Best Price Guarantee",
      desc: "We offer the most competitive rates in the market, ensuring you get the best value for your money.",
    },
    {
      id: 3,
      icon: "🎧",
      title: "24/7 Support",
      desc: "Our dedicated support team is always ready to assist you at any time, anywhere you go.",
    },
    {
      id: 4,
      icon: "⚡",
      title: "Quick Booking",
      desc: "Our streamlined process allows you to book your dream car in just a few clicks.",
    },
  ];

  return (
    <section className="about">
      <div className="about__header">
        <span className="about__tag">Why Choose Us</span>
        <h2 className="about__title">About Morent</h2>
        <p className="about__subtitle">
          Morent is the best platform for car rental, safely and reliably. We prioritize your comfort and safety.
        </p>
      </div>

      <div className="about__grid">
        {features.map((f) => (
          <div key={f.id} className="about__card">
            <div className="about__card-icon">{f.icon}</div>
            <h3 className="about__card-title">{f.title}</h3>
            <p className="about__card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
