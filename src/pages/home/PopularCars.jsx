import { Link } from "react-router-dom";
import { cars } from "../../data/cars";
import CarCard from "../../components/CarCard";
import { useFavorites } from "../../hooks/useFavorites";

function PopularCars() {
  const { isFav, toggle } = useFavorites();

  return (
    <section className="popular">
      <div className="popular__header">
        <h2 className="popular__title">Popular Car</h2>
        <Link to="/cars" className="popular__view-all">
          View All
        </Link>
      </div>

      <div className="popular__grid">
        {cars.slice(0, 4).map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFav={isFav(car.id)}
            onToggleFav={toggle}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularCars;
