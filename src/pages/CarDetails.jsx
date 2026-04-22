import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCar, cars } from "../data/cars";
import { useFavorites } from "../hooks/useFavorites";
import PickUpDropOff from "../components/PickUpDropOff";
import CarCard from "../components/CarCard";
import heartIcon from "../assets/icons/heart.svg";
import starIcon from "../assets/icons/Star.svg";
import Profil from "../assets/icons/Profil.svg";
import Profil2 from "../assets/icons/Profil2.svg";

function CarDetails() {
  const { id } = useParams();
  const car = getCar(id);
  const { isFav, toggle } = useFavorites();
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!car) {
    return (
      <div className="cd__not-found">
        <h2>Car not found.</h2>
      </div>
    );
  }

  const recentCars = cars.filter((c) => c.id !== car.id).slice(0, 6);

  return (
    <div className="cd">
      {/* Yuxarı hissə: Sol banner + Sağ info */}
      <div className="cd__top">
        {/* Sol: Banner + Gallery */}
        <div className="cd__left">
          <div className="cd__banner">
            <div className="cd__banner-text">
              <h2>Sports car with the best design and acceleration</h2>
              <p>
                Safety and comfort while driving a futuristic and elegant sports
                car
              </p>
            </div>
            <img
              src={car.gallery[activeImg]}
              alt={car.name}
              className="cd__banner-img"
            />
          </div>

          <div className="cd__gallery">
            {car.gallery.map((img, i) => (
              <div
                key={i}
                className={`cd__thumb ${activeImg === i ? "active" : ""}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} alt={`${car.name} ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Sağ: Info + Qiymət */}
        <div className="cd__right">
          <div className="cd__info">
            {/* Ad + Ürək */}
            <div className="cd__info-header">
              <div>
                <h1 className="cd__name">{car.name}</h1>
                <div className="cd__rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`cd__star ${i < Math.floor(car.rating) ? "active" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="cd__reviewer">{car.reviews}+ Reviewer</span>
                </div>
              </div>
              <button
                className={`cd__fav ${isFav(car.id) ? "active" : ""}`}
                onClick={() => toggle(car.id)}
              >
                <img src={heartIcon} alt="favorite" />
              </button>
            </div>

            {/* Təsvir */}
            <p className="cd__desc">{car.description}</p>

            {/* Specs */}
            <div className="cd__specs">
              <div className="cd__spec">
                <span className="cd__spec-label">Type Car</span>
                <span className="cd__spec-value">{car.category}</span>
              </div>
              <div className="cd__spec">
                <span className="cd__spec-label">Capacity</span>
                <span className="cd__spec-value">{car.seats} Person</span>
              </div>
              <div className="cd__spec">
                <span className="cd__spec-label">Steering</span>
                <span className="cd__spec-value">{car.transmission}</span>
              </div>
              <div className="cd__spec">
                <span className="cd__spec-label">Gasoline</span>
                <span className="cd__spec-value">{car.fuel}</span>
              </div>
            </div>

            {/* Qiymət + Rent Now */}
            <div className="cd__price-row">
              <div>
                <div className="cd__price">
                  <span className="cd__price-now">${car.price}/</span>
                  <span className="cd__price-day">days</span>
                </div>
                <span className="cd__price-old">${car.price + 20}.00</span>
              </div>
              <Link to={`/booking/${car.id}`} className="cd__rent-btn">
                Rent Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="cd__reviews">
        <div className="cd__reviews-header">
          <h3>Reviews</h3>
          <span className="cd__reviews-badge">{car.reviews}</span>
        </div>

        {[
          {
            name: "Alex Stanton",
            role: "CEO at Bukalapak",
            date: "21 July 2022",
            rating: 4,
            avatar: Profil,
            text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
          },
          {
            name: "Skylar Dias",
            role: "CEO at Amazon",
            date: "20 July 2022",
            rating: 4,
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

      {/* Recent Cars */}
      <div className="cd__recent">
        <div className="cd__recent-header">
          <h3>Recent Car</h3>
          <a href="/cars" className="cd__view-all">
            View All
          </a>
        </div>
        <div className="cd__recent-grid">
          {recentCars.map((c) => (
            <CarCard
              key={c.id}
              car={c}
              isFav={isFav(c.id)}
              onToggleFav={toggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
