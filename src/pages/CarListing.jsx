import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";
import { useFavorites } from "../hooks/useFavorites";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function CarsListing() {
  const { filters, search } = useOutletContext();
  const { isFav, toggle } = useFavorites();
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    return cars.filter((car) => {
      const matchSearch = car.name.toLowerCase().includes(search.toLowerCase());

      const matchType =
        filters.type.length === 0 || filters.type.includes(car.category);

      const matchSeats =
        filters.seats.length === 0 || filters.seats.includes(String(car.seats));

      const matchPrice = car.price <= filters.maxPrice;

      return matchSearch && matchType && matchSeats && matchPrice;
    });
  }, [search, filters]);

  const visibleCars = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="cars-listing">
      <p className="cars-listing__count">{filtered.length} cars found</p>

      <div className="cars-listing__grid">
        {visibleCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFav={isFav(car.id)}
            onToggleFav={toggle}
          />
        ))}
        {filtered.length === 0 && (
          <p className="cars-listing__empty">No cars found.</p>
        )}
      </div>

      {hasMore && (
        <div className="cars-listing__more">
          <button
            className="cars-listing__more-btn"
            onClick={() => setVisibleCount((prev) => prev + 9)}
          >
            Show More Cars
          </button>
          <span className="cars-listing__more-count">
            {visibleCount} of {filtered.length} cars
          </span>
        </div>
      )}
    </div>
  );
}

export default CarsListing;
