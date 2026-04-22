import { Link } from "react-router-dom";
import heart from "../assets/icons/heart.svg";
import Gasoline from "../assets/icons/Gasoline.svg";
import transmission from "../assets/icons/transmission.svg";
import people from "../assets/icons/people.svg";

function CarCard({ car, isFav, onToggleFav }) {
  return (
    <div className="car-card">
      {/* Yuxarı hissə: ad + ürək */}
      <div className="car-card__header">
        <div>
          <h3 className="car-card__name">{car.name}</h3>
          <span className="car-card__category">{car.category}</span>
        </div>
        <button
          className={`car-card__fav ${isFav ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            onToggleFav(car.id);
          }}
        >
          <img src={heart} alt="favorite" />
        </button>
      </div>

      {/* Maşın şəkli */}
      <div className="car-card__img-wrap">
        <img src={car.image} alt={car.name} className="car-card__img" />
      </div>

      {/* Xüsusiyyətlər */}
      <div className="car-card__specs">
        <span className="car-card__spec">
          <img src={Gasoline} alt="fuel" />
          {car.fuel}
        </span>
        <span className="car-card__spec">
          <img src={transmission} alt="transmission" />
          {car.transmission}
        </span>
        <span className="car-card__spec">
          <img src={people} alt="seats" />
          {car.seats} People
        </span>
      </div>

      {/* Alt hissə: qiymət + düymə */}
      <div className="car-card__footer">
        <div className="car-card__price">
          <span className="car-card__price-now">${car.price}/</span>
          <span className="car-card__price-day">day</span>
        </div>
        <Link to={`/cars/${car.id}`} className="car-card__btn">
          Rent Now
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
