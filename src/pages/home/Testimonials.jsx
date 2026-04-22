import Profil from "../../assets/icons/Profil.svg";
import Profil2 from "../../assets/icons/Profil2.svg";
function Testimonials() {
  return (
    <div className="cd__testimonials cd__reviews">
      <div className="cd__reviews-header">
        <h3>TESTIMONIALS</h3>
      </div>

      {[
        {
          name: "Alex Stanton",
          role: "CEO at Bukalapak",
          date: "21 July 2026",
          rating: 4,
          avatar: Profil,
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          role: "CEO at Amazon",
          date: "20 July 2026",
          rating: 5,
          avatar: Profil2,
          text: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ].map((review, i) => (
        <div key={i} className="cd__review">
          <div className="cd__review-avatar">
            <img src={review.avatar} alt={review.name} />
          </div>
          <div className="cd__review-body">
            <div className="cd__review-top">
              <div>
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
              <div className="cd__review-meta">
                <span>{review.date}</span>
                <div>
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className={`cd__star ${j < review.rating ? "active" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        </div>
      ))}

      <button className="cd__show-all">Show All ↓</button>
    </div>
  );
}

export default Testimonials;
