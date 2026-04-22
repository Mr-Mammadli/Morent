import hero from "../../assets/images/hero.png";
import hero1 from "../../assets/images/hero1.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__card hero__card--blue">
        <div className="hero__card-content">
          <h1 className="hero__title">The Best Platform for Car Rental</h1>
          <p className="hero__desc">
            Ease of doing a car rental safely and reliably. And low price.
          </p>
          <Link to="/cars">
            <button className="hero__btn">Rental Car</button>
          </Link>
        </div>
        <div className="hero__img-wrap">
          <img src={hero} alt="car" className="hero__img" />
        </div>
      </div>

      <div className="hero__card hero__card--lightblue">
        <div className="hero__card-content">
          <h1 className="hero__title">Easy way to rent a car at a low price</h1>
          <p className="hero__desc">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Link to="/cars">
            <button className="hero__btn">Rental Car</button>
          </Link>
        </div>
        <div className="hero__img-wrap">
          <img src={hero1} alt="car" className="hero__img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
