import { useState } from "react";
import { cars } from "../../data/cars";
import CarCard from "../../components/CarCard";
import { useFavorites } from "../../hooks/useFavorites";

function RecommendationCars() {
  const { isFav, toggle } = useFavorites();
  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // Slice cars starting from index 4 (since first 4 are in popular)
  const recommendedCars = cars.slice(4);

  return (
    <section className="recommendation">
      <div className="recommendation__header">
        <h2 className="recommendation__title">Recommendation Car</h2>
      </div>

      <div className="recommendation__grid">
        {recommendedCars.slice(0, visibleCount).map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFav={isFav(car.id)}
            onToggleFav={toggle}
          />
        ))}
      </div>

      {visibleCount < recommendedCars.length && (
        <div className="recommendation__footer">
          <button className="recommendation__btn" onClick={showMore}>
            Show more car
          </button>
          <span className="recommendation__count">
            {recommendedCars.length} Car
          </span>
        </div>
      )}
    </section>
  );
}

export default RecommendationCars;
